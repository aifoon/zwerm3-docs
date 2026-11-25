// Takes the screenshots of KweenB for the manual, with their numbered
// markers. KweenB has to run in development with both debugging ports:
//
//   KWEENB_DEBUG_PORT=9333 KWEENB_INSPECT_PORT=9334 npm run watch   (in kweenb)
//   node tools/shots-kweenb.mjs [name-of-one-shot]                  (here)
//
// Nothing in here starts a stream, plays a sound, flashes, updates or
// deletes: it only opens screens and dialogs and closes them again.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { openWindow, sleep } from "./window.mjs";
import { openMain } from "./kweenb-menu.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "static", "img", "manual");
const only = process.argv[2] || "";
const w = await openWindow(9333);
const m = await openMain(9334);
const MODAL = ".MuiModal-root > .MuiBox-root";

const file = (name) => path.join(OUT, `${name}.png`);
const page = async (name, height = 760) => {
  await closeModals();
  await w.size(1200, height, 2);
  await w.click(`text=${name}`);
  await sleep(900);
};
const tab = async (name) => {
  await w.click(`text=${name}`);
  await sleep(900);
};
const closeModals = async () => {
  for (let i = 0; i < 4; i++) {
    const open = await w.run(`document.querySelectorAll(".MuiModal-root, [role=menu]").length`);
    if (!open) return;
    await w.run(`(() => {
      const menu = document.querySelector(".MuiMenu-root .MuiBackdrop-root, .MuiPopover-root .MuiBackdrop-root");
      if (menu) { menu.click(); return; }
      const modal = [...document.querySelectorAll(".MuiModal-root")].pop();
      if (!modal) return;
      // Only ever press a button that closes: one named so, or the cross
      // (a button with only an icon). Never "the first button": in the
      // power dialog that one closes KweenB.
      const buttons = [...modal.querySelectorAll("button")];
      const named = buttons.find((b) => ["close", "cancel", "not now"].includes(b.innerText.trim().toLowerCase()));
      const cross = buttons.find((b) => !b.innerText.trim() && b.querySelector("svg"));
      if (named || cross) (named || cross).click();
      else modal.querySelector(".MuiModal-backdrop, .MuiBackdrop-root")?.click();
    })()`);
    await sleep(700);
  }
};
const menu = async (wait, ...labels) => {
  await closeModals();
  await w.size(1200, 760, 2);
  const answer = await m.menu(...labels);
  if (answer !== "ok") throw new Error(answer);
  await sleep(wait);
};

const shots = {
  // ---- the window ----
  "kweenb-window": async () => {
    await page("Swarm");
    await w.shot(file("kweenb-window"), {
      marks: [
        { rect: [22, 104, 184, 320], n: 1 },
        { at: "text=HUB", n: 2, side: "left" },
        { at: "has=Streaming latency", n: 3, side: "bottom" },
        { at: "text=Disconnect", n: 4, side: "bottom" },
        { at: "text=Connect", n: 5, side: "bottom" },
        { at: "button@3", n: 6, side: "bottom" },
      ],
    });
  },
  "connect-menu": async () => {
    await page("Swarm");
    await w.click("text=Connect");
    await sleep(600);
    // the first item has the focus and shows its tooltip: take that away
    await w.run(`document.activeElement?.blur()`);
    await sleep(900);
    await w.shot(file("connect-menu"), {
      marks: [
        { at: "text=Stream to the bees", n: 1, side: "right" },
        { at: "text=Trigger only", n: 2, side: "bottom-right" },
      ],
      clip: "[role=menu]",
      pad: 90,
    });
  },
  power: async () => {
    await page("Swarm");
    await w.run(`[...document.querySelectorAll("button")].filter((b) => b.getBoundingClientRect().top < 80 && !b.innerText.trim())[0].click()`);
    await sleep(700);
    await w.shot(file("power"), {
      marks: [
        { at: "text=Close KweenB", n: 1 },
        { at: "text=Reboot all bees", n: 2 },
        { at: "text=Shutdown all bees", n: 3 },
      ],
      clip: MODAL,
      pad: 30,
    });
  },

  // Streams (silence) to the bees that are in use, so the other pictures
  // show a swarm at work. Run on its own: node tools/shots-kweenb.mjs connect
  connect: async () => {
    if (only !== "connect") return;
    await page("Swarm");
    await w.click("text=Connect");
    await sleep(500);
    await w.click("text=Stream to the bees");
    await sleep(350);
    await w.shot(file("connecting"), { clip: MODAL, pad: 30 });
    for (let i = 0; i < 90; i++) {
      await sleep(1000);
      if (!(await w.run(`document.querySelectorAll(".MuiModal-root").length`))) break;
    }
    console.log(await w.run(`document.querySelector(".MuiModal-root")?.innerText || "connected"`));
  },

  // ---- swarm ----
  swarm: async () => {
    await page("Swarm");
    await w.click("[aria-label=Compact]");
    await sleep(500);
    await w.shot(file("swarm"), {
      marks: [
        { at: "text=1–4", n: 1 },
        { at: "text=Live meters", n: 2, side: "top" },
        { at: "[aria-label=Compact]", n: 3, side: "top" },
        { at: "text=bee21", n: 4, box: false },
        { at: "text=drop inactive bee", n: 5 },
        { at: "text=drop an active bee", n: 6 },
        { at: "text=bee01", n: 7 },
      ],
    });
  },
  "swarm-detailed": async () => {
    await page("Swarm");
    await w.click("[aria-label=Detailed]");
    await sleep(900);
    // name the card of the first active bee and its two buttons
    await w.run(`(() => {
      let p = __find("has=192.168");
      for (let i = 0; i < 8 && p; i++) {
        p = p.parentElement;
        const buttons = p.querySelectorAll("button, a");
        if (buttons.length >= 2) {
          p.setAttribute("data-m", "card");
          buttons[0].setAttribute("data-m", "card-bin");
          buttons[buttons.length - 1].setAttribute("data-m", "card-gear");
          return true;
        }
      }
      return false;
    })()`);
    await w.shot(file("swarm-detailed"), {
      marks: [
        { at: "[data-m=card-bin]", n: 1, side: "top", grow: 2 },
        { at: "[data-m=card-gear]", n: 2, side: "right", grow: 2 },
        { at: "text=Streaming", n: 3, box: false },
        { at: "has=Wi-Fi", n: 4, box: false },
        { at: "has=192.168", n: 5, box: false },
      ],
      clip: "[data-m=card]",
      pad: 60,
    });
  },
  "bee-page": async () => {
    await page("Swarm");
    await w.click("[aria-label=Detailed]");
    await sleep(900);
    // the gear on the card of the first active bee
    await w.run(`(() => {
      let p = __find("has=192.168");
      for (let i = 0; i < 8 && p; i++) {
        p = p.parentElement;
        const buttons = p.querySelectorAll("button, a");
        if (buttons.length >= 2) { buttons[buttons.length - 1].click(); return true; }
      }
      return false;
    })()`);
    await sleep(1500);
    await w.shot(file("bee-page"), {
      marks: [
        { at: "text=Stop", n: 1 },
        { at: "text=Restart", n: 2 },
        { at: "text=Switch off", n: 3 },
        { at: "text=IP Address", n: 4, box: false },
        { at: "text=Name", n: 5, box: false },
      ],
    });
    await w.click("text=Swarm");
    await sleep(500);
    await w.click("[aria-label=Compact]");
  },

  // ---- routing ----
  routing: async () => {
    await page("Routing", 900);
    await w.shot(file("routing"), {
      marks: [
        { at: "text=20", n: 1, side: "top" },
        { at: "text=mono", n: 2, side: "top" },
        { at: "text=in order", n: 3, side: "top" },
        // the patch bay is one drawing: these three are pointed at by place
        { rect: [290, 359, 178, 20], n: 4 },
        { rect: [706, 361, 14, 14], n: 5, side: "top" },
        { rect: [958, 359, 54, 20], n: 6, side: "bottom" },
        { rect: [1084, 329, 52, 20], n: 7, side: "top" },
      ],
    });
  },

  // ---- audio ----
  "audio-trigger": async () => {
    await page("Audio");
    await tab("Trigger");
    await sleep(1500);
    await w.shot(file("audio-trigger"), {
      marks: [
        { at: "text=ambi", n: 1, box: false },
        { at: "text=All", n: 2, side: "top" },
        { at: "text=bee21", n: 3, side: "top" },
      ],
    });
  },
  "audio-files": async () => {
    await page("Audio");
    await tab("Files");
    await sleep(1500);
    // tick one scene, so the Delete button shows as it is when in use
    await w.run(`document.querySelector("main input[type=checkbox], input[type=checkbox]")?.click()`);
    await sleep(400);
    await w.shot(file("audio-files"), {
      marks: [
        { at: "text=Delete", n: 1, side: "top" },
        { at: "text=Refresh", n: 2, side: "top" },
        { at: "text=Upload Scene", n: 3, side: "top" },
        { at: "text=bee21", n: 4 },
      ],
    });
    await w.run(`document.querySelector("main input[type=checkbox]:checked, input[type=checkbox]:checked")?.click()`);
  },
  "audio-upload": async () => {
    await page("Audio");
    await tab("Files");
    await sleep(1000);
    await w.click("text=Upload Scene");
    await sleep(800);
    await w.shot(file("audio-upload"), {
      marks: [
        { at: "text=Name", n: 1, box: false },
        { at: "text=Select", n: 2 },
        { at: "text=Start Upload", n: 3 },
      ],
      clip: MODAL,
      pad: 30,
    });
  },
  "audio-mixer": async () => {
    await page("Audio");
    await tab("Mixer");
    await w.shot(file("audio-mixer"), {
      marks: [
        { at: "text=Master", n: 1, box: false },
        { at: "text=bee21", n: 2, box: false },
      ],
    });
  },
  "audio-tests": async () => {
    await page("Audio");
    await tab("Tests");
    await w.shot(file("audio-tests"), {
      marks: [
        { at: "text=All Bees", n: 1, box: false },
        { at: "text=speaker ready", n: 2 },
        { at: "text=sample", n: 3 },
      ],
    });
  },

  // ---- monitor ----
  "monitor-bees": async () => {
    await page("Monitor");
    await tab("Bees");
    await w.shot(file("monitor-bees"), {
      marks: [
        { at: "has=Counting since", n: 1, box: false },
        { at: "text=Start again", n: 2, side: "top" },
        { at: "text=Save log…", n: 3, side: "top" },
        { at: "has=fine", n: 4, box: false },
        { at: "text=bee21", n: 5, box: false },
      ],
    });
  },
  "monitor-bee": async () => {
    await page("Monitor", 1560);
    await tab("Bees");
    await w.click("text=bee21");
    await sleep(1200);
    await w.shot(file("monitor-bee"), {
      marks: [
        { at: "has=Late packets now", n: 1, box: false },
        { at: "has=Late packets over the last", n: 2, box: false },
        { at: "has=Since counting started", n: 3, box: false },
        { at: "has=What happened to", n: 4, box: false },
      ],
    });
    await w.click("has=All bees").catch(() => {});
  },
  "monitor-network": async () => {
    await page("Monitor", 900);
    await tab("Network");
    await sleep(1500);
    await w.shot(file("monitor-network"), {
      marks: [
        { at: "text=Wi-Fi in use", n: 1, box: false },
        { at: "text=To the bees", n: 2, box: false },
        { at: "has=Per bee, right now", n: 3, box: false },
      ],
    });
  },
  "monitor-events": async () => {
    await page("Monitor");
    await tab("Events");
    await w.click("text=Everything").catch(() => {});
    await sleep(600);
    await w.shot(file("monitor-events"), {
      marks: [
        { at: "text=What needs you", n: 1, side: "top" },
        { at: "text=Everything", n: 2, side: "top" },
      ],
    });
    await w.click("text=What needs you").catch(() => {});
  },

  // ---- settings ----
  "settings-audio": async () => {
    await page("Settings", 980);
    await tab("Audio@2").catch(() => tab("Audio"));
    await w.shot(file("settings-audio"), {
      marks: [
        { at: "text=Sample rate", n: 1, box: false },
        { at: "text=Block size", n: 2, box: false },
        { at: "text=Bit depth", n: 3, box: false },
        { at: "text=Network buffer (ms)", n: 4, box: false },
        { at: "text=Sound card buffer (blocks)", n: 5, box: false },
        { at: "text=Audio device", n: 6, box: false },
        { at: "text=Send each packet (times)", n: 7, box: false },
      ],
    });
  },

  // ---- dialogs from the menu ----
  "new-speaker": async () => {
    await menu(2500, "File", "New Speaker…");
    await w.shot(file("new-speaker"), { clip: MODAL, pad: 30 });
  },
  adopt: async () => {
    await menu(8500, "File", "Adopt from Network…");
    await w.shot(file("adopt"), { clip: MODAL, pad: 30 });
  },
  "flash-speaker": async () => {
    await menu(1500, "File", "Flash", "A Speaker…");
    await w.shot(file("flash-speaker-1"), {
      marks: [
        { at: "has=.img", n: 1, box: false },
        { at: "has=Choose", n: 2 },
        { at: "text=Next", n: 3 },
      ],
      clip: MODAL,
      pad: 30,
    });
    await w.click("text=Next");
    await sleep(2500);
    await w.shot(file("flash-speaker-2"), { clip: MODAL, pad: 30 });
  },
  "flash-satellite": async () => {
    await menu(1500, "File", "Flash", "A Satellite…");
    await w.shot(file("flash-satellite-1"), { clip: MODAL, pad: 30 });
    await w.click("text=Next");
    await sleep(2500);
    await w.shot(file("flash-satellite-2"), { clip: MODAL, pad: 30 });
  },
  "backup-cloud": async () => {
    await menu(8000, "File", "Back Up", "Back Up to the Cloud…");
    await w.shot(file("backup-cloud"), {
      marks: [
        { at: "has=bee 21:", n: 1, box: false },
        { at: "text=Backup key…", n: 2 },
        { at: "text=Back up", n: 3 },
      ],
      clip: MODAL,
      pad: 30,
    });
  },
  restore: async () => {
    await menu(8000, "File", "Restore", "Restore from the Cloud…");
    await w.run(`(() => { const e = __find("has=bee 21,"); if (e) e.scrollIntoView({ block: "center" }); })()`);
    await sleep(400);
    await w.shot(file("restore"), {
      marks: [
        { at: "text=bee 21", n: 1, box: false },
        { at: "has=bee 21,", n: 2 },
        { at: "text=Make the bees exactly like their backup", n: 3, box: false },
      ],
      clip: MODAL,
      pad: 30,
    });
  },
  "remote-interface": async () => {
    await menu(1500, "File", "Remote Interface…");
    await w.shot(file("remote-interface"), {
      marks: [
        { at: ".MuiModal-root img", n: 1, grow: 10 },
        { at: "has=http://", n: 2 },
        { at: "text=Open on this computer", n: 3 },
      ],
      clip: MODAL,
      pad: 30,
    });
  },
  "send-to-satellite": async () => {
    await menu(5000, "File", "Send to Satellite…");
    await w.shot(file("send-to-satellite"), { clip: MODAL, pad: 30 });
  },
  updates: async () => {
    await menu(9000, "File", "Check for Updates…");
    await w.shot(file("updates"), {
      marks: [
        { at: "has=This is KweenB", n: 1, box: false },
        { at: "has=Newest firmware", n: 2, box: false },
        { at: "text=bee21", n: 3, box: false },
        { at: "text=Up to date", n: 4 },
        { at: "text=Look again", n: 5 },
      ],
      clip: MODAL,
      pad: 30,
    });
  },
};

for (const [name, take] of Object.entries(shots)) {
  if (only && name !== only) continue;
  try {
    await take();
  } catch (error) {
    console.warn(`  ! ${name} failed: ${error.message}`);
  }
}
await closeModals();
await w.click("text=Swarm").catch(() => {});
await w.send("Emulation.clearDeviceMetricsOverride");
w.close();
m.close();
