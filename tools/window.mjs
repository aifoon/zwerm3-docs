// Looking at and steering a window through the Chrome debugging port, and
// taking screenshots with numbered markers on them. Used by the scripts
// that make the pictures of the manual.
import fs from "node:fs";
import path from "node:path";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Connect to a window
 * @param port the debugging port
 * @param match part of the address or title of the window, empty for the first
 */
export const openWindow = async (port, match = "") => {
  const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
  const target = targets.find(
    (t) =>
      t.type === "page" &&
      (!match || t.url.includes(match) || t.title.includes(match))
  );
  if (!target)
    throw new Error(
      `No window "${match}" on port ${port}. Open: ${targets.map((t) => t.url).join(", ")}`
    );

  const socket = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((resolve, reject) => {
    socket.onopen = resolve;
    socket.onerror = reject;
  });
  let nextId = 1;
  const waiting = new Map();
  socket.onmessage = (message) => {
    const data = JSON.parse(message.data);
    if (data.id && waiting.has(data.id)) {
      waiting.get(data.id)(data);
      waiting.delete(data.id);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      waiting.set(id, (data) =>
        data.error ? reject(new Error(data.error.message)) : resolve(data.result)
      );
      socket.send(JSON.stringify({ id, method, params }));
    });

  /** Run JavaScript in the window and give back its result */
  const run = async (expression) => {
    const result = await send("Runtime.evaluate", {
      expression,
      awaitPromise: true,
      returnByValue: true,
      userGesture: true,
    });
    if (result.exceptionDetails)
      throw new Error(
        result.exceptionDetails.exception?.description ||
          result.exceptionDetails.text
      );
    return result.result.value;
  };

  // helpers that live in the window itself
  await run(`(() => {
    const visible = (e) => {
      const r = e.getBoundingClientRect();
      return r.width > 0 && r.height > 0 && getComputedStyle(e).visibility !== "hidden";
    };
    // "text=Connect" finds the smallest visible element with exactly that
    // text, "has=Conn" the smallest that contains it, anything else is CSS.
    // "@2" at the end picks the second match.
    window.__find = (what) => {
      let nth = 0;
      const at = what.match(/@(\\d+)$/);
      if (at) { nth = Number(at[1]) - 1; what = what.slice(0, at.index); }
      let found;
      if (what.startsWith("text=") || what.startsWith("has=")) {
        const exact = what.startsWith("text=");
        const text = what.slice(exact ? 5 : 4).toLowerCase();
        const all = [...document.querySelectorAll("body *")].filter((e) => {
          if (!visible(e) || e.closest("[data-manual-mark]")) return false;
          const whole = (e.innerText || e.textContent || e.value || e.getAttribute("aria-label") || "").trim().toLowerCase();
          // the words that are directly in this element, not in its children
          const direct = [...e.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim().toLowerCase();
          return exact ? whole === text || direct === text : whole.includes(text);
        });
        // the smallest ones: those without a matching child
        found = all.filter((e) => !all.some((o) => o !== e && e.contains(o)));
      } else found = [...document.querySelectorAll(what)].filter(visible);
      return found[nth] || null;
    };
    window.__click = (what) => {
      const e = window.__find(what);
      if (!e) throw new Error("Not found: " + what);
      e.scrollIntoView({ block: "center" });
      e.click();
      return true;
    };
    window.__unmark = () =>
      document.querySelectorAll("[data-manual-mark]").forEach((e) => e.remove());
    // marks: [{ at (or rect), n, side: "left|right|top|bottom|inside", box: true|false, grow }]
    window.__mark = (marks) => {
      window.__unmark();
      const missing = [];
      marks.forEach((mark) => {
        // "rect: [left, top, width, height]" points at a place instead of
        // an element (for things that are drawn, like the patch bay)
        const e = mark.rect ? null : window.__find(mark.at);
        if (!mark.rect && !e) { missing.push(mark.at); return; }
        const r = mark.rect
          ? { left: mark.rect[0], top: mark.rect[1], width: mark.rect[2], height: mark.rect[3] }
          : e.getBoundingClientRect();
        const grow = mark.grow ?? 6;
        const box = { x: r.left - grow, y: r.top - grow, w: r.width + 2 * grow, h: r.height + 2 * grow };
        const add = (style, text = "") => {
          const d = document.createElement("div");
          d.dataset.manualMark = "1";
          d.textContent = text;
          Object.assign(d.style, { position: "fixed", zIndex: 2147483647, pointerEvents: "none", boxSizing: "border-box" }, style);
          document.body.appendChild(d);
        };
        if (mark.box !== false)
          add({ left: box.x + "px", top: box.y + "px", width: box.w + "px", height: box.h + "px",
                border: "2px solid #ffb000", borderRadius: "8px", boxShadow: "0 0 0 1px rgba(0,0,0,.45)" });
        const size = 26;
        const side = mark.side || "left";
        let x = box.x - size / 2, y = box.y - size / 2;           // top-left corner
        if (side === "right") x = box.x + box.w - size / 2;
        if (side === "bottom") y = box.y + box.h - size / 2;
        if (side === "bottom-right") { x = box.x + box.w - size / 2; y = box.y + box.h - size / 2; }
        if (side === "inside") { x = box.x + box.w / 2 - size / 2; y = box.y + box.h / 2 - size / 2; }
        // without a frame, the number stands next to the thing instead of
        // on top of it
        if (mark.box === false) {
          y = r.top + r.height / 2 - size / 2;
          x = r.left - size - 6;
          if (side === "right") x = r.left + r.width + 6;
          if (side === "top") { x = r.left; y = r.top - size - 4; }
          if (side === "bottom") { x = r.left; y = r.top + r.height + 4; }
        }
        x = Math.max(2, Math.min(innerWidth - size - 2, x));
        y = Math.max(2, Math.min(innerHeight - size - 2, y));
        add({ left: x + "px", top: y + "px", width: size + "px", height: size + "px", borderRadius: "50%",
              background: "#ffb000", color: "#16162a", font: "700 15px/26px -apple-system, Helvetica, Arial, sans-serif",
              textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,.6)" }, String(mark.n));
      });
      return missing;
    };
    window.__rect = (what) => {
      const e = window.__find(what);
      if (!e) return null;
      const r = e.getBoundingClientRect();
      return { x: r.left, y: r.top, width: r.width, height: r.height };
    };
  })()`);

  const click = (what) => run(`__click(${JSON.stringify(what)})`);

  /** Wait until something is on screen */
  const waitFor = async (what, timeoutMs = 8000) => {
    const until = Date.now() + timeoutMs;
    while (Date.now() < until) {
      if (await run(`!!__find(${JSON.stringify(what)})`)) return;
      await sleep(150);
    }
    throw new Error(`Never appeared: ${what}`);
  };

  /**
   * Take a screenshot
   * @param file where to save it (png)
   * @param options marks: numbered markers; clip: only this element (with
   *   some room around it); pad: that room in pixels
   */
  const shot = async (file, { marks = [], clip = "", pad = 16 } = {}) => {
    const missing = await run(`__mark(${JSON.stringify(marks)})`);
    if (missing.length) console.warn(`  ! ${path.basename(file)}: not found: ${missing.join(", ")}`);
    await sleep(120);
    const params = { format: "png" };
    if (clip) {
      const r = await run(`__rect(${JSON.stringify(clip)})`);
      if (!r) throw new Error(`Nothing to cut out: ${clip}`);
      params.clip = {
        x: Math.max(0, r.x - pad),
        y: Math.max(0, r.y - pad),
        width: r.width + 2 * pad,
        height: r.height + 2 * pad,
        scale: 1,
      };
    }
    const { data } = await send("Page.captureScreenshot", params);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, Buffer.from(data, "base64"));
    await run("__unmark()");
    console.log("saved", path.relative(process.cwd(), file));
  };

  const size = (width, height, scale = 2, mobile = false) =>
    send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: scale,
      mobile,
    });

  return { run, click, waitFor, shot, size, send, close: () => socket.close() };
};
