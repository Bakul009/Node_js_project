const T = require("tesseract.js")
 var Jimp = require("jimp");



Jimp.read('https://i.ibb.co/jTKYQqP/Captcha-United.png').then(image => {
  var pixelColor = image.getPixelColor(10, 1);
  image.background(pixelColor);
  
  image.resize(800, 300) // resize
  image .quality(60) // set JPEG quality
  image.greyscale()
  image.write('result.jpg');
     

});

T.recognize('result.jpg', 'eng' ,{logger: e=> console.log(e)})
.then(out=> console.log(out)) //Result shown in console in text part
