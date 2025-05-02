const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");
const { start } = require("repl");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Electron + React",
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Optional: if you want to use Node.js features directly in the renderer
    },
  });

  const startUrl = process.env.VITE_DEV_SERVER_URL || "http://localhost:5173";

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);
