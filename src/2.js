const projectName = "Project1234567890";
const projectDirectory = "../" + projectName;
const indexFile = `${projectDirectory}/index.html`;
const jsFile = `${projectDirectory}/script.js`;

function generateRandomCode() {
  let code = "";
  for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    if (randomNumber % 2 === 0) {
      code += `<div class="box">Box ${i}</div>`;
    } else {
      code += `<button onclick="alert('Hello World')">Button ${i}</button>`;
    }
  }
  return code;
}

function writeCodeToFile(code) {
  const fs = require("fs");
  fs.writeFileSync(indexFile, code);
}

writeCodeToFile(generateRandomCode());
