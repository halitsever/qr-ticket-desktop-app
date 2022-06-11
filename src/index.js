const { app, BrowserWindow, ipcMain } = require("electron");
const { qrSerialize } = require("../usecases/json/qr-to-serializer");
const { saveAsJsonFile } = require("../usecases/json/save-json-file");
const { saveAsExcelFile } = require("../usecases/excel/save-excel-file");



const path = require("path");
var participantarr = [];

var openApp = () => {
  const app = new BrowserWindow({
    autoHideMenuBar: true,
    frame: false,
    fullscreen: true,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  ipcMain.on("save-qr", async (event, qrstring) => {
    var jsonData = await qrSerialize(qrstring);
    participantarr.push(jsonData);
  });

  ipcMain.on("close-window", async () => {
    if (await saveAsExcelFile(participantarr) === "200" || await saveAsJsonFile(participantarr) === "400") return app.close();
  });

  app.loadFile("./ui/main.html");
};

app.whenReady().then(() => {
  openApp();
});
