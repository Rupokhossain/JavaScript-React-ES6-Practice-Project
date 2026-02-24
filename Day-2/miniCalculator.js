// global scope
let calculationCount = 0;

// matematics function (arrow fun)
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => (b !== 0 ? a / b : "Error: Cannot divide by zero");

// function declaretion
function miniCalculator(num1, num2, operation) {
  let result;
  calculationCount++;

  // logic check
  if (operation === "add") {
    result = add(num1, num2);
  } else if (operation === "subtract") {
    result = subtract(num1, num2);
  } else if (operation === "multiply") {
    result = multiply(num1, num2);
  } else if (operation === "divide") {
    result = divide(num1, num2);
  } else {
    return "Invalid Operation!";
  }

   return `Result of ${operation}: ${result}`;
}


// funciton call
console.log(miniCalculator(10, 5, "add"));      
console.log(miniCalculator(20, 4, "divide"));   
console.log(miniCalculator(7, 3, "multiply"));   
console.log(miniCalculator(10, 0, "divide"));  

console.log(`Total calculations performed: ${calculationCount}`);