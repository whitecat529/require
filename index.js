var fs=require('fs');
module.exports=function (filePath) {
  var code=fs.readFileSync(filePath);
  var fun=Function([exports],code);
  var a={exports:{}};
  fun();
  return a.exports;
};
