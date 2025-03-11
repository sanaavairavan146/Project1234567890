// Project1234567890
function getRandomNumber() {
  const max = 10;
  const min = 1;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomNumber());
