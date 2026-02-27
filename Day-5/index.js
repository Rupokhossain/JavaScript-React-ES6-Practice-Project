// spread operator

const numbers = [1, 2, 3];
const newNumber = [...numbers, 4, 5];
console.log(newNumber);


const user = {name: "Rupok", age: 25};
const updatedUser = {...user, city: "Dhaka"};
console.log(updatedUser);

// rest operator
function sumAll(...numbers) {
    console.log(numbers);

    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sumAll(1, 2, 3, 4));


const fruits = ["Mango", "Apple", "Orange", "Banana", "Grape"];