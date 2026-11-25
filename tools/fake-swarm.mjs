// A pretend swarm, for pictures of things the real speakers can not show
// (yet): it answers like the API of a bee, for every bee at once, with a
// battery at a level you choose. Nothing here touches a real speaker.
//
//   node tools/fake-swarm.mjs                  start the pretend bees
//   node tools/fake-swarm.mjs attach           point a running KweenB at them
//
// "attach" needs the development KweenB started with KWEENB_INSPECT_PORT
// (see the README). It only lasts until KweenB is closed; KweenB itself is
// not changed. The pretend bees can not stream: do not press Connect.
import http from "node:http";
import { openMain } from "./kweenb-menu.mjs";

const PORT = Number(process.env.FAKE_SWARM_PORT || 39300);
const INSPECT_PORT = Number(process.env.KWEENB_INSPECT_PORT || 9334);

// the battery of every pretend bee: [percentage, volt]. Under 40% is
// "running low", under 20% is "low" (the same limits as on a real bee).
const BATTERIES = {
  1: [96, 12.9], 2: [91, 12.8], 3: [88, 12.7], 4: [84, 12.6], 5: [79, 12.5],
  6: [76, 12.5], 7: [72, 12.4], 8: [34, 11.7], 9: [68, 12.3], 10: [63, 12.2],
  11: [61, 12.2], 12: [58, 12.1], 13: [55, 12.1], 14: [12, 11.1], 15: [52, 12.0],
  16: [49, 12.0], 17: [47, 11.9], 18: [45, 11.9], 19: [43, 11.9], 20: [41, 11.8],
  21: [87, 12.7], 22: [28, 11.5],
};
// bees that are "switched off"
const OFFLINE = new Set((process.env.FAKE_OFFLINE || "").split(",").filter(Boolean).map(Number));
// bees whose battery can not be put in a percentage yet (shows volts)
const NO_PERCENTAGE = new Set((process.env.FAKE_VOLTS_ONLY || "").split(",").filter(Boolean).map(Number));

const started = Date.now();
// a level changed while running: POST /bee/<n>/battery {"percentage": 15}
const changed = new Map();

const status = (id) => {
  const [percentage, voltage] = changed.get(id) || BATTERIES[id] || [80, 12.5];
  const seconds = Math.round((Date.now() - started) / 1000) + 1800 + id * 7;
  const known = !NO_PERCENTAGE.has(id);
  const name = `bee${String(id).padStart(2, "0")}`;
  return {
    apiVersion: "2.0.1",
    identity: { id, name, hostname: name },
    stream: {
      state: "idle", mode: null, error: null, jack: false, jacktrip: false,
      pd: false, runningSeconds: 0, restarts: 0, xruns: 0, glitches: 0,
    },
    battery: {
      present: true,
      voltage,
      current: 0.42,
      power: Math.round(voltage * 0.42 * 100) / 100,
      percentage: known ? percentage : null,
      level: !known ? null : percentage < 20 ? "low" : percentage < 40 ? "warning" : "safe",
    },
    storage: { freeMb: 24000 - id * 100, totalMb: 29000, scenes: 0 },
    wifiSignalDbm: -42 - ((id * 7) % 24),
    outputLevelDb: -100,
    network: {
      receivedBytes: seconds * 900, receivedPackets: seconds * 4,
      sentBytes: seconds * 700, sentPackets: seconds * 3, linkMbps: 866,
    },
    uptimeSeconds: seconds,
    time: new Date().toISOString(),
  };
};

const serve = () =>
  http
    .createServer((req, res) => {
      const match = req.url.match(/^\/bee\/(\d+)\/(.*)$/);
      const id = match ? Number(match[1]) : 0;
      const path = match ? match[2].split("?")[0] : "";
      if (!match || OFFLINE.has(id)) {
        req.socket.destroy();
        return;
      }
      const json = (body, code = 200) => {
        res.writeHead(code, { "Content-Type": "application/json" });
        res.end(JSON.stringify(body));
      };
      if (path === "battery" && req.method === "POST") {
        let body = "";
        req.on("data", (d) => (body += d));
        req.on("end", () => {
          const { percentage, voltage = 11.5 } = JSON.parse(body || "{}");
          changed.set(id, [percentage, voltage]);
          json({ ok: true });
        });
        return;
      }
      if (path === "events") {
        res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache" });
        const send = () => res.write(`data: ${JSON.stringify(status(id))}\n\n`);
        send();
        const timer = setInterval(send, 2000);
        req.on("close", () => clearInterval(timer));
        return;
      }
      if (path === "status") return json(status(id));
      if (path === "scenes") return json([]);
      if (path === "system/time") return json({ ok: true });
      // everything that would do something (stream, reboot, upload, ...)
      return json({ statusCode: 503, message: "This is a pretend bee" }, 503);
    })
    .listen(PORT, "127.0.0.1", () => console.log(`Pretend swarm on port ${PORT}`));

// Make the running KweenB ask the pretend bees: every request to
// 192.168.50.1xx:3000 goes to this computer instead.
const attach = async () => {
  const main = await openMain(INSPECT_PORT);
  const answer = await main.run(`(() => {
    if (!globalThis.__realFetch) globalThis.__realFetch = globalThis.fetch;
    globalThis.fetch = (url, options) => {
      const m = String(url).match(/^http:\\/\\/192\\.168\\.50\\.1(\\d\\d):3000\\/(.*)$/);
      return globalThis.__realFetch(m ? "http://127.0.0.1:${PORT}/bee/" + Number(m[1]) + "/" + m[2] : url, options);
    };
    return "attached";
  })()`);
  console.log(answer);
  main.close();
};

if (process.argv[2] === "attach") await attach();
else serve();
