require('electron-reload')(__dirname, {
  electron: require(`${__dirname}/node_modules/electron`)
});

const { app, BrowserWindow, dialog, ipcMain } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // opcional
      nodeIntegration: true
    }
  });

  win.loadFile('index.html');
  // win.webContents.openDevTools(); // Descomente para debug
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});


ipcMain.on('confirmar-saida', async (event) => {
  const result = await dialog.showMessageBox({
    type: 'question',
    buttons: ['Sim', 'Não'],
    defaultId: 1,
    title: 'Confirmação',
    message: 'Você realmente deseja sair do programa?'
  });

  if (result.response === 0) {
    app.quit();
  }
});
