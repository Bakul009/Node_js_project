open a file called "lenna.png"
// Jimp.read("https://i.ibb.co/R4BB4DW/Captcha-Bajaj.jpg", (err, lenna) => {
//   if (err) throw err;
//   lenna
//     .resize(800, 300) // resize
//     .quality(60) // set JPEG quality
//     .greyscale() // set greyscale
//     .background(4032)
    // .scan(0, 0, image.width, image.height, function (x, y, idx) {
    //   var pixelColor = image.getPixelColor(x, y);
    //   if (pixelColor != white && (y < 2 || image.bitmap.height - y < 10)) {
    //      borderColors[pixelColor] =true;
    //   })
    //  [...]