// Takes the screenshots of the satellite's trigger interface for the
// manual. The interface is opened in a Chrome with a debugging port:
//
//   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new \
//      --remote-debugging-port=9340 --user-data-dir=/tmp/chrome-satellite http://satellite.local/
//   node tools/shots-satellite.mjs [name-of-one-shot]
//
// Nothing in here plays a sound, starts triggering, saves or deletes: it
// only chooses scenes on this browser and opens and closes dialogs.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { openWindow, sleep } from "./window.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "static", "img", "manual");
const only = process.argv[2] || "";
const w = await openWindow(Number(process.env.PORT || 9340));
const file = (name) => path.join(OUT, `${name}.png`);
const MODAL = ".MuiModal-root > .MuiBox-root";
await w.size(820, 640, 2, true);
await sleep(500);

// give the icon buttons a name to point at
const nameButtons = () =>
  w.run(`(() => {
    const card = (() => { let p = [...document.querySelectorAll("body *")].find((e) => /^bee\\d+$/.test((e.innerText || "").trim()) && !e.children.length); for (let i = 0; i < 8 && p; i++) { p = p.parentElement; if (p.querySelectorAll("button").length >= 7) return p; } })();
    if (card) ["minus", "plus", "play", "stop", "loop", "clear", "folder"].forEach((n, i) => card.querySelectorAll("button")[i]?.setAttribute("data-m", "card-" + n));
    if (card) card.querySelector(".MuiSlider-root")?.setAttribute("data-m", "card-slider");
    const all = [...document.querySelectorAll("button")];
    const low = all.find((b) => b.innerText.trim() === "LOW");
    if (low) {
      let bar = low; for (let i = 0; i < 8; i++) { bar = bar.parentElement; if (bar.querySelector(".MuiSlider-root")) break; }
      bar.setAttribute("data-m", "master");
      bar.querySelector(".MuiSlider-root")?.setAttribute("data-m", "master-slider");
      const buttons = [...bar.querySelectorAll("button")];
      const after = buttons.slice(buttons.indexOf([...bar.querySelectorAll("button")].find((b) => b.innerText.trim() === "HIGH")) + 1);
      low.previousElementSibling?.setAttribute("data-m", "master-volume");
      low.parentElement.setAttribute("data-m", "master-what");
      after.forEach((b, i) => b.setAttribute("data-m", "master-" + i));
    }
    return !!card;
  })()`);
const closeModal = async () => {
  await w.run(`(() => {
    const modal = [...document.querySelectorAll(".MuiModal-root")].pop();
    if (!modal) return;
    const buttons = [...modal.querySelectorAll("button")];
    const named = buttons.find((b) => b.innerText.trim().toLowerCase() === "cancel");
    const cross = buttons.find((b) => !b.innerText.trim() && b.querySelector("svg"));
    (named || cross)?.click();
  })()`);
  await sleep(600);
};

const shots = {
  "satellite-select-scene": async () => {
    await w.click("text=single bees");
    await sleep(600);
    await nameButtons();
    await w.click("[data-m=card-folder]");
    await w.waitFor(MODAL);
    await sleep(2000);
    await w.shot(file("satellite-select-scene"), { clip: MODAL, pad: 24 });
    // choose the first scene, so the card has something to show
    await w.run(`[...document.querySelectorAll(".MuiModal-root button")].filter((b) => b.innerText.trim())[0].click()`);
    await sleep(800);
  },
  "satellite-single-bees": async () => {
    await w.click("text=single bees");
    await sleep(600);
    await nameButtons();
    await w.shot(file("satellite-single-bees"), {
      marks: [
        { at: "text=kweenb-S", n: 1, side: "bottom" },
        { at: "text=single bees", n: 2, side: "bottom" },
        { at: "text=Save To New Composition", n: 3, side: "top" },
        { at: "text=Compositions", n: 4, side: "right" },
        { at: "[data-m=card-slider]", n: 5, side: "top" },
        { at: "[data-m=card-play]", n: 6, side: "bottom" },
        { at: "[data-m=card-folder]", n: 7, side: "bottom-right" },
        { at: "[data-m=master]", n: 8, side: "top" },
      ],
    });
  },
  "satellite-bee-card": async () => {
    await w.click("text=single bees");
    await sleep(600);
    await nameButtons();
    await w.shot(file("satellite-bee-card"), {
      marks: [
        { at: "[data-m=card-slider]", n: 1, side: "top" },
        { at: "[data-m=card-minus]", n: 2, side: "top" },
        { at: "[data-m=card-play]", n: 3, side: "bottom" },
        { at: "[data-m=card-stop]", n: 4, side: "bottom" },
        { at: "[data-m=card-loop]", n: 5, side: "bottom" },
        { at: "[data-m=card-clear]", n: 6, side: "bottom" },
        { at: "[data-m=card-folder]", n: 7, side: "bottom" },
      ],
      clip: "[data-m=card-slider]",
      pad: 150,
    });
  },
  "satellite-master": async () => {
    await w.click("text=single bees");
    await sleep(600);
    await nameButtons();
    await w.shot(file("satellite-master"), {
      marks: [
        { at: "[data-m=master-slider]", n: 1, side: "top" },
        { at: "[data-m=master-what]", n: 2, side: "top" },
        { at: "[data-m=master-0]", n: 3, side: "top" },
        { at: "[data-m=master-1]", n: 4, side: "top" },
        { at: "[data-m=master-2]", n: 5, side: "top" },
        { at: "[data-m=master-3]", n: 6, side: "top" },
      ],
      clip: "[data-m=master]",
      pad: 34,
    });
  },
  "satellite-compositions": async () => {
    await w.click("text=Compositions");
    await w.waitFor(MODAL);
    await sleep(1500);
    await w.shot(file("satellite-compositions"), {
      marks: [{ at: "text=Delete Mode", n: 1 }],
      clip: MODAL,
      pad: 24,
    });
    await closeModal();
  },
  "satellite-save": async () => {
    await w.click("text=Save To New Composition");
    await w.waitFor(MODAL);
    await sleep(600);
    await w.shot(file("satellite-save"), { clip: MODAL, pad: 24 });
    await closeModal();
  },
  "satellite-settings": async () => {
    await w.click("text=kweenb-S");
    await w.waitFor(MODAL);
    await sleep(600);
    await w.shot(file("satellite-settings"), {
      marks: [{ at: "text=Start Triggering", n: 1 }],
      clip: MODAL,
      pad: 24,
    });
    await closeModal();
  },
  "satellite-scene-trigger": async () => {
    await w.click("text=scene trigger");
    await sleep(800);
    for (let i = 0; i < 3; i++) {
      await w.click("text=Select Scenes");
      await w.waitFor(MODAL);
      await sleep(i ? 800 : 2500);
      if (i === 0)
        await w.shot(file("satellite-select-scenes"), {
          marks: [{ at: "text=Reload Cache", n: 1 }],
          clip: MODAL,
          pad: 24,
        });
      await w.run(`[...document.querySelectorAll(".MuiModal-root button")].filter((b) => b.innerText.trim() && b.innerText.trim().toLowerCase() !== "reload cache")[${i}].click()`);
      await sleep(700);
    }
    await nameButtons();
    await w.run(`(() => {
      const play = __find("has=countdown") || [...document.querySelectorAll("main button, button")].find((b) => b.innerText.trim().length > 6 && b.getBoundingClientRect().width > 250);
      let button = play; while (button && button.tagName !== "BUTTON") button = button.parentElement;
      button?.setAttribute("data-m", "scene-play");
      let card = button; for (let i = 0; i < 6 && card; i++) { card = card.parentElement; if (card.querySelectorAll("button").length >= 3) break; }
      card?.querySelectorAll("button")[0]?.parentElement.setAttribute("data-m", "scene-order");
    })()`);
    await w.shot(file("satellite-scene-trigger"), {
      marks: [
        { at: "text=Select Scenes", n: 1, side: "bottom" },
        { at: "[data-m=scene-play]", n: 2, side: "bottom" },
        { at: "[data-m=scene-order]", n: 3, side: "top" },
        { at: "[data-m=master]", n: 4, side: "top" },
      ],
    });
    await w.click("text=single bees");
  },
};

for (const [name, take] of Object.entries(shots)) {
  if (only && name !== only) continue;
  try {
    await take();
  } catch (error) {
    console.warn(`  ! ${name} failed: ${error.message}`);
    await closeModal();
  }
}
w.close();
