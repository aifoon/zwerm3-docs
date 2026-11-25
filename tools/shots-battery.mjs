// Takes the pictures of the battery display for the manual. They are taken
// from a pretend swarm (see fake-swarm.mjs), so no speaker is needed:
//
//   FAKE_VOLTS_ONLY=5 node tools/fake-swarm.mjs &      the pretend bees
//   (start the development KweenB with KWEENB_DEBUG_PORT=9333 KWEENB_INSPECT_PORT=9334)
//   node tools/fake-swarm.mjs attach
//   node tools/shots-battery.mjs
//
// It puts bees 1 to 8 in use on the Swarm page (and leaves them so) and
// presses nothing that streams, plays or changes a speaker.
import path from "node:path";
import { fileURLToPath } from "node:url";
import { openWindow, sleep } from "./window.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "static", "img", "manual");
const file = (name) => path.join(OUT, `${name}.png`);
const FAKE = `http://127.0.0.1:${process.env.FAKE_SWARM_PORT || 39300}`;
const w = await openWindow(Number(process.env.KWEENB_DEBUG_PORT || 9333));

// bee 3 has a low battery in the pictures (bee 8 runs low, bee 5 only
// tells its voltage)
await fetch(`${FAKE}/bee/3/battery`, { method: "POST", body: JSON.stringify({ percentage: 12, voltage: 11.1 }) });

// give the battery of a bee (found by the text next to it) a name to point at
const nameBattery = (text, name) =>
  w.run(`(() => {
    const e = __find(${JSON.stringify("text=" + text)});
    if (e) e.parentElement.setAttribute("data-m", ${JSON.stringify(name)});
    return !!e;
  })()`);

// ---- the Swarm page ----
await w.size(1200, 640, 2);
await w.click("text=Swarm");
await sleep(800);
await w.click("text=1–8");
await w.waitFor("text=12%", 15000);
await sleep(2500);
await nameBattery("96%", "full");
await nameBattery("34%", "running-low");
await nameBattery("12%", "low");
await nameBattery("12.5 V", "volts");
await w.shot(file("battery-swarm"), {
  marks: [
    { at: "[data-m=full]", n: 1, side: "bottom" },
    { at: "[data-m=running-low]", n: 2, side: "bottom" },
    { at: "[data-m=low]", n: 3, side: "bottom" },
    { at: "[data-m=volts]", n: 4, side: "bottom" },
  ],
});

// ---- the Monitor page ----
await w.size(1200, 760, 2);
await w.click("text=Monitor");
await w.waitFor("text=Battery low");
await sleep(1500);
await w.shot(file("battery-monitor"), {
  marks: [
    { at: "has=need you", n: 1, side: "top" },
    { at: "text=Battery low", n: 2, side: "bottom" },
    { at: "text=Battery running low", n: 3, side: "bottom" },
  ],
});

// one bee
await w.click("text=bee03");
await w.waitFor("has=Charge this bee soon");
await sleep(1200);
await w.run(`(() => {
  const label = __find("text=Battery");
  label?.parentElement.setAttribute("data-m", "battery-stat");
  let card = __find("has=Charge this bee soon");
  for (let i = 0; i < 6 && card; i++) { card = card.parentElement; if (card.innerText.includes("Late packets now") && card.innerText.includes("bee03")) break; }
  card?.setAttribute("data-m", "bee-now");
})()`);
await w.shot(file("battery-monitor-bee"), {
  marks: [
    { at: "text=Battery low", n: 1, side: "top", box: false },
    { at: "[data-m=battery-stat]", n: 2, side: "right" },
  ],
  clip: "[data-m=bee-now]",
  pad: 20,
});
await w.click("has=All bees");
await sleep(600);

// the list of what happened
await w.click("text=Events");
await sleep(1200);
await w.shot(file("battery-events"), {
  marks: [{ at: "has=Battery low (12%)", n: 1, side: "right" }],
});
await w.click("text=Bees");
await w.click("text=Swarm");
w.close();
