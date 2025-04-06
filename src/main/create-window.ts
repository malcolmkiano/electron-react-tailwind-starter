import path from "node:path";

import { BrowserWindow } from "electron";

export default function createWindow(viteServerUrl: string | undefined, viteName = "main_window") {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // and load the index.html of the app.
  if (viteServerUrl) {
    mainWindow.loadURL(viteServerUrl);
  } else {
    mainWindow.loadFile(path.join(__dirname, `../renderer/${viteName}/index.html`));
  }

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  return mainWindow;
}
