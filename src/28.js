let randomCode = Math.random().toString(36).substring(2);
randomCode += randomCode.toString(16).substring(0, 4);
console.log(randomCode);
