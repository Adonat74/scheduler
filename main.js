const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');


const isDev = process.env.NODE_ENV !== 'production';
const isMac = process.platform === 'darwin';


// Main Window
function createMainWindow() {
    mainWindow = new BrowserWindow({
      width: isDev ? 1000 : 800,
      height: 1000,
      resizable: isDev,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        preload: path.join(__dirname, 'preload.js'),
      },
    });
  
    // Show devtools automatically if in development
    if (isDev) {
      mainWindow.webContents.openDevTools();
    }
  
      // mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
     mainWindow.loadFile(path.join(__dirname, './renderer/index.html'));
}

// About Window
function createAboutWindow() {
    aboutWindow = new BrowserWindow({
        width: 300,
        height: 300,
        title: 'About Electron'
    });
  
    aboutWindow.loadFile(path.join(__dirname, './renderer/about.html'));
}


// When the app is ready, create the window
app.on('ready', () => {
    createMainWindow();
  
    const mainMenu = Menu.buildFromTemplate(menu);
    Menu.setApplicationMenu(mainMenu);
  
    // Remove variable from memory
    mainWindow.on('closed', () => (mainWindow = null));
});



// Menu template
const menu = [
    ...(isMac
      ? [
          {
            label: app.name,
            submenu: [
              {
                label: 'About',
                click: createAboutWindow,
              },
            ],
          },
        ]
      : []),
    {
      role: 'fileMenu',
    },
    ...(!isMac
      ? [
          {
            label: 'Help',
            submenu: [
              {
                label: 'About',
                click: createAboutWindow,
              },
            ],
          },
        ]
      : []),
    // {
    //   label: 'File',
    //   submenu: [
    //     {
    //       label: 'Quit',
    //       click: () => app.quit(),
    //       accelerator: 'CmdOrCtrl+W',
    //     },
    //   ],
    // },
    ...(isDev
      ? [
          {
            label: 'Developer',
            submenu: [
              { role: 'reload' },
              { role: 'forcereload' },
              { type: 'separator' },
              { role: 'toggledevtools' },
            ],
          },
        ]
      : []),
  ];



// Quit when all windows are closed.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});


// Open a window if none are open (macOS)
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});