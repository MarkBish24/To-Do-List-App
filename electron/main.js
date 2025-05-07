const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const fs = require("fs");
const filePath = path.join(__dirname, "data.json");

function createMainWindow() {
  const mainWindow = new BrowserWindow({
    title: "Electron + React",
    width: 1000,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
    icon: path.join(__dirname, "../renderer/assets/photos/notebook.png"),
  });

  const startUrl = process.env.VITE_DEV_SERVER_URL || "http://localhost:5173";

  mainWindow.loadURL(startUrl);
}

app.whenReady().then(createMainWindow);

ipcMain.handle("read-data", async () => {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading data.json:", error);
    return { status: "error", message: "Failed to read data" };
  }
});

ipcMain.handle("write-data", async (event, newData) => {
  try {
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2), "utf-8");
    return { status: "success" };
  } catch (error) {
    console.error("Error writing to data.json:", error);
    return { status: "error", message: "Failed to write data" };
  }
});

ipcMain.handle("add-data", async (event, newData) => {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const currentData = JSON.parse(raw);

    currentData.push(newData);

    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");

    return { status: "success" };
  } catch (error) {
    console.error("Error writing to data.json:", error);
    return { status: "error", message: "Failed to write data" };
  }
});

ipcMain.handle("edit-data", async (event, newData) => {
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    const currentData = JSON.parse(raw);

    const index = currentData.findIndex((note) => note.id === newData.id);

    if (index !== -1) {
      currentData[index] = newData; // Update the note
      fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");
      return { status: "success", message: "Data updated successfully" };
    } else {
      return { status: "error", message: "Note not found" };
    }
  } catch (error) {
    console.error("Error writing to data.json:", error);
    return { status: "error", message: "Failed to write data" };
  }
});
