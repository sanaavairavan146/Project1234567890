const getRandomNumber = () => Math.floor(Math.random() * 10);

function getRandomCode() {
  let code = '';
  for (let i = 0; i < 8; i++) {
    code += getRandomNumber();
  }
  return code;
}
