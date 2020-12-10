'use strict';

const select = document.getElementById('Math');
// const target = document.getElementById('target');
const number = document.getElementById('number');
// const str = parseInt(number);
const number2 = document.getElementById('number2');
// const str2 = parseInt(number2);


const btn = document.getElementById('btn');
const result = document.getElementById('result');

function Math() {
  return {
    plus() {
      const fix = parseInt(number.value) + parseInt(number2.value);
      // result.innerHTML = parseInt(number.value) + parseInt(number2.value);
      result.innerHTML = fix;
    },
    minus() {
      const fix = number.value / number2.value;      result.innerHTML = fix.toFixed(2);
    },
    multiply() {
      const fix = number.value / number2.value;      result.innerHTML = fix.toFixed(2);
    },
    divide() {
      const fix = number.value / number2.value;
      result.innerHTML = fix.toFixed(2);
    },
  }
}
const test = Math();
btn.addEventListener('click', () => {
  switch (select.value) {
    case '+':
      test.plus();
      break;
    case '-':
      test.minus();
      break;
    case '*':
      test.multiply();
      break;
    case '/':
      test.divide();
      break;
    // default:
    //   test.divide();
  }
});
