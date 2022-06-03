const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
    saveQR: (object) => ipcRenderer.send('save-qr', object),
    closeWindow: ()=> ipcRenderer.send("close-window")
})
