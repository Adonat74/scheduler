const path = require('path');
const { app, BrowserWindow} = require('electron');



// Main Window
function createMainWindow() {
    mainWindow = new BrowserWindow({
      //autoHideMenuBar: true,
      width: 800,
      height: 1000,
      webPreferences: {
        nodeIntegration: true
      },
    });
  
  
      // mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
     mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}


// When the app is ready, create the window
app.on('ready', () => {
    createMainWindow();
  
  
    // Remove variable from memory
    mainWindow.on('closed', () => (mainWindow = null));
});


// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});


