function randomCode() {
  var codes = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var codeLength = 10;
  var result = "";
  for (var i = 0; i < codeLength; i++) {
    result += codes[Math.floor(Math.random() * codes.length)];
  }
  return result;
}
