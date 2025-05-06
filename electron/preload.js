const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  readData: () => ipcRenderer.invoke("read-data"),
  writeData: (newData) => ipcRenderer.invoke("write-data", newData),
});
