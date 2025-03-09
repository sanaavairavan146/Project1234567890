document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const output = document.getElementById('output');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const num = parseInt(input.value);
    if (!isNaN(num)) {
      output.textContent = `The result is ${calculate(num)}`;
    } else {
      output.textContent = 'Please enter a valid number';
    }
  });
});

function calculate(num) {
  return num * num;
}
