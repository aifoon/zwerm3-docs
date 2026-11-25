// A small helper to look at and steer a window through the Chrome
// debugging port (KweenB started with KWEENB_DEBUG_PORT, or Chrome started
// with --remote-debugging-port). Used to take the manual's screenshots.
//
//   node tools/cdp.mjs <port> eval "<javascript>"       prints the result
//   node tools/cdp.mjs <port> shot <file.png>           screenshot of the window
//   node tools/cdp.mjs <port> size <width> <height>     size of the page
//   node tools/cdp.mjs <port> goto <url>
//   add  --match <text>  to pick the window whose address or title holds text
import fs from "node:fs";

const args = process.argv.slice(2);
const matchAt = args.indexOf("--match");
const match = matchAt >= 0 ? args.splice(matchAt, 2)[1] : "";
const [port, command, ...rest] = args;

const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
const target = targets.find(
  (t) => t.type === "page" && (!match || t.url.includes(match) || t.title.includes(match))
);
if (!target) {
  console.error("No such window. Open:", targets.map((t) => t.url).join(", "));
  process.exit(1);
}

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

if (command === "eval") {
  const result = await send("Runtime.evaluate", {
    expression: rest.join(" "),
    awaitPromise: true,
    returnByValue: true,
    userGesture: true,
  });
  if (result.exceptionDetails) {
    console.error(result.exceptionDetails.exception?.description || result.exceptionDetails.text);
    process.exitCode = 1;
  } else {
    const value = result.result.value;
    console.log(typeof value === "string" ? value : JSON.stringify(value, null, 1));
  }
} else if (command === "shot") {
  const { data } = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync(rest[0], Buffer.from(data, "base64"));
  console.log("saved", rest[0]);
} else if (command === "size") {
  await send("Emulation.setDeviceMetricsOverride", {
    width: Number(rest[0]),
    height: Number(rest[1]),
    deviceScaleFactor: Number(rest[2] || 2),
    mobile: rest[3] === "mobile",
  });
} else if (command === "goto") {
  await send("Page.navigate", { url: rest[0] });
} else {
  console.error("Unknown command", command);
  process.exitCode = 1;
}
socket.close();
