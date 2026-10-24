const { app, BrowserWindow, shell } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({
    width: 1200, height: 800, autoHideMenuBar: true,
    icon: path.join(__dirname, "..", "build", "icon.png"),
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, "..", "www", "index.html"));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
