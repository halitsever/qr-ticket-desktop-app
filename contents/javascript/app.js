var tmp_qr;
function onScanSuccess(decodedText, decodedResult) {
  if (decodedText === tmp_qr) return;
  window.electronAPI.saveQR(decodedText);
  tmp_qr = decodedText;
}

var html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250,
});

html5QrcodeScanner.render(onScanSuccess);

document.querySelector(".closeBtn").addEventListener("click", () => {
  window.electronAPI.closeWindow();
});
