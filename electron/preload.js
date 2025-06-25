const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  confirmarSaida: () => ipcRenderer.send('confirmar-saida')
});
