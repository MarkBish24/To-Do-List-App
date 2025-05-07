const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  readData: () => ipcRenderer.invoke("read-data"),
  writeData: (newData) => ipcRenderer.invoke("write-data", newData),
  addData: (newData) => ipcRenderer.invoke("add-data", newData),
  editData: (newData) => ipcRenderer.invoke("edit-data", newData),
  deleteData: (newData) => ipcRenderer.invoke("delete-data", newData),
});
