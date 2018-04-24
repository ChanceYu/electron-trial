const {app, BrowserWindow, Menu, ipcMain, ipcRenderer} = require('electron')
const path = require('path')
const url = require('url')
const config = require('./config')

let isDevelopment = config.dev == 'development';

if (isDevelopment) {
    require('electron-reload')(__dirname, {
        ignored: /node_modules|[\/\\]\./
    });
}

let MainWin

function createWindow () {
  MainWin = new BrowserWindow({
    width: 1000,
    height: 800
  })

  MainWin.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  if (isDevelopment) {
    MainWin.webContents.openDevTools();
  }

  MainWin.on('closed', () => {
    MainWin = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (MainWin === null) {
    createWindow()
  }
})