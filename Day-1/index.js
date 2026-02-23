/* const a = 10;
let b = "10";

console.log(a == b);
console.log(a === b); */


/* let age = 20;
age = 25;

const name = "Siam";
// name = "Rahim";   // error 

console.log(age);
console.log(name); */


// Tricky practice

/*const user = {
    name: "Siam",
    age: 20
};

user.age = 22;
user.name = "Rupok";

console.log(user); */


// Primitive - string, number, boolean -> copy korle new value create hoy.

/* let a = 10;
let b = a;

b = 20; 

console.log(a);
console.log(b); */


// reference - object, array -> copy korle same memory reference hoy.

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);