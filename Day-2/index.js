// ======Function Declaration vs Arrow Function==========

// function declaration
/* function sayHello(name) {
    return "Hello " + name;
}
console.log(sayHello("Rupok")); */


/* function calculateArea(length, width) {
    const area = length * width;
    return area;
}
console.log(calculateArea(10, 5)); */



// arrow function
/* const calculateArea = (length, width) => {
    return length * width;
};

const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); */


// global scope

/* const country = "Bangladesh";

function showCountry() {
    console.log(country);
}

showCountry();
console.log(country); */


// local scope

/* function greet() {
    const message = "Hello Rupok!";
    console.log(message);
}  

greet()*/
// console.log(message);


// block scope
/* {
    let a = 10;
    const b = 20;
    var c = 30;
}

console.log(a); // error
console.log(b); // error
console.log(c); */ 


/*if(true) {
    let msg = "Hello";
    console.log(msg);

} */
// console.log(msg);


/* let x = 10;

function test() {
    console.log(x);
    let x = 20;
}
test() */


// scope chain

/* const globalName = "Rupok"; // global scope

function outer() {
    const outerVar = "Ami bahirer fucntion";

    function inner() {
        const innerVar = "ami vitorer function";

        console.log(innerVar);
        console.log(outerVar);
        console.log(globalName);
    }
    inner();
}
outer(); */


// add
const add = (a, b) => {
    return a + b;
};

// substract
const subtract = (a, b) => a - b;

// multiply
const multiply = (a, b) => a * b;

//divide
const divide = (a, b) => {
    if(b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
};

console.log("Addition:", add(10, 5));          
console.log("Subtraction:", subtract(10, 5));   
console.log("Multiplication:", multiply(10, 5)); 
console.log("Division:", divide(10, 5));        
console.log("Division by Zero:", divide(10, 0));