const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const XLSX = require("xlsx");
var participantarr = [];
var openApp = () => {
  const app = new BrowserWindow({
    width: 800,
    height: 800,
    autoHideMenuBar: true,
    frame: false,
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on("save-qr", async (event, qrstring) => {
    let jsonDataString = JSON.stringify(qrstring);
    let jsonData = JSON.parse(jsonDataString);
    await participantarr.push(jsonData);
    console.log('participantarr :>> ', participantarr);
  });

  function randomify() {
    var rand = Math.random(Math.floor * 10) + 1;
    return rand;
  }

  ipcMain.on("close-window", async () => {
    
    var rowsWS = XLSX.utils.json_to_sheet([participantarr]);
    var wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, rowsWS, "participants");
    
    await XLSX.writeFile(wb, "participant-list_" + randomify() + ".xlsx");
    app.close();
  });

  app.loadFile("./ui/main.html");
};

app.whenReady().then(() => {
  openApp();
});
