function multiply(num1: number, num2: number) {
  return num1 * num2;
}

function sum(num1: number, num2: number) {
  return num1 + num2;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function showResult(result: number): void {
  if(isEven(result)) {
      console.log(`The result is ${result} and it's even!`);
  } else {
      console.log(`The result is ${result} and isn't even!`);
  }
}

(() => {
  const num1 = prompt("First Number");
  const num2 = prompt("Second Number");
  if (typeof num1 !== "number" || typeof num2 !== "number") return console.log('you need to type only numbers');
  
  let result = sum(num1,num2);
  result += multiply(num1,num2);
  showResult(result);
})();