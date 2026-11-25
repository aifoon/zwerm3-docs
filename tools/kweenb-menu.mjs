// Choosing an item of KweenB's application menu from a script (KweenB
// started with KWEENB_INSPECT_PORT).
//   node tools/kweenb-menu.mjs 9334 "File" "Check for Updates…"
//   node tools/kweenb-menu.mjs 9334            lists the menus
export const openMain = async (port) => {
  const [target] = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
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
  const run = (expression) =>
    new Promise((resolve, reject) => {
      const id = nextId++;
      waiting.set(id, (data) => {
        const result = data.result;
        if (data.error || result.exceptionDetails)
          reject(new Error(data.error?.message || result.exceptionDetails.exception?.description));
        else resolve(result.result.value);
      });
      socket.send(
        JSON.stringify({
          id,
          method: "Runtime.evaluate",
          params: { expression, returnByValue: true, awaitPromise: true, includeCommandLineAPI: true },
        })
      );
    });

  /** Choose a menu item, by the labels on the way to it */
  const menu = (...labels) =>
    run(`(() => {
      const { Menu, BrowserWindow } = require("electron");
      let items = Menu.getApplicationMenu().items;
      let item = null;
      for (const label of ${JSON.stringify(labels)}) {
        item = items.find((i) => i.label === label);
        if (!item) return "No menu item " + label + " among: " + items.map((i) => i.label).join(", ");
        items = item.submenu ? item.submenu.items : [];
      }
      if (!item) return Menu.getApplicationMenu().items.map((i) => i.label + ": " + i.submenu.items.map((s) => s.label || "—").join(" | ")).join("\\n");
      item.click(undefined, BrowserWindow.getAllWindows()[0], undefined);
      return "ok";
    })()`);

  return { run, menu, close: () => socket.close() };
};

if (import.meta.url === `file://${process.argv[1]}`) {
  const [port, ...labels] = process.argv.slice(2);
  const main = await openMain(port);
  console.log(await main.menu(...labels));
  main.close();
}
