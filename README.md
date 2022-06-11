<h1>QR Conference System</h1>
<img align="right" width="250" height="400" src="https://i.ibb.co/bQChvMy/Ekran-g-r-nt-s-2022-06-04-011948-1.png">
<p align="left"> 
  QR code scanning system used at <a href="https://www.linkedin.com/events/technoz6935059638434308097/">Techno Z</a> event
</p>
<h1>Debugging</h1>
Debug: npm run start<br>
Dev: npm run dev<br>
Test: npm test
<h1>Project structure</h1>

📦qr-conference-system  
 ┃ ┣ 📂plugins  
 ┃ ┃ ┣ 📂photon  
 ┃ ┃ ┃ ┣ 📂css  
 ┃ ┃ ┃ ┃ ┗ 📜photon.min.css  
 ┃ ┃ ┃ ┗ 📂fonts  
 ┃ ┃ ┃ ┃ ┣ 📜photon-entypo.eot  
 ┃ ┃ ┃ ┃ ┣ 📜photon-entypo.svg  
 ┃ ┃ ┃ ┃ ┣ 📜photon-entypo.ttf  
 ┃ ┃ ┃ ┃ ┗ 📜photon-entypo.woff  
 ┃ ┃ ┗ 📂qr-reader  
 ┃ ┃ ┃ ┗ 📜html5-qrcode.min.js  
 ┃ ┣ 📂ui  
 ┃ ┃ ┗ 📜main.html  
 ┃ ┣ 📜.gitattributes  
 ┃ ┣ 📜.gitignore  
 ┃ ┣ 📜index.js  
 ┃ ┣ 📜package-lock.json  
 ┃ ┗ 📜preload.js  
 ┣ 📂test  
 ┃ ┣ 📂excel  
 ┃ ┃ ┗ 📜save-excel-file.test.js  
 ┃ ┗ 📂json  
 ┃ ┃ ┣ 📜qr-to-serializer.test.js  
 ┃ ┃ ┗ 📜save-json-file.test.js  
 ┣ 📂usecases  
 ┃ ┣ 📂excel  
 ┃ ┃ ┗ 📜save-excel-file.js  
 ┃ ┗ 📂json  
 ┃ ┃ ┣ 📜qr-to-serializer.js  
 ┃ ┃ ┗ 📜save-json-file.js  
 ┣ 📜package.json  
 ┗ 📜Readme.md
<h1>Usage</h1>
<p>When you scan the QR code, the information read is saved in the excel table. If the quality of your webcam is bad, you can try <a href="https://play.google.com/store/apps/details?id=com.dev47apps.droidcam&hl=tr&gl=US">droidcam</a> as an alternative.</p>
<img  src="https://i.ibb.co/WchxZJ4/Ekran-g-r-nt-s-2022-06-04-011525.png">