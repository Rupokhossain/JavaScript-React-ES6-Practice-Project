// advanced array practice

const users = [
  { name: "Ayesha", age: 22, active: true },
  { name: "Rahim", age: 30, active: false },
  { name: "Karim", age: 25, active: true },
  { name: "Fatima", age: 28, active: false },
];


// sort users
/*const sortedUsers = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by Age:", sortedUsers);


// filter active users
const activeUsers = users.filter(user => user.active === true);
console.log("Active Users:", activeUsers);

// Count Totals using Reduce
const totalAge = users.reduce((accumulator, user) => {
    return accumulator + user.age;
}, 0);

console.log("Total Age Sum:", totalAge);
*/



// advanced sorting
const nameAZ = [...users].sort((a, b) => a.name.localeCompare(b.name));

console.log("Names A-Z:", nameAZ);


// advanced filtering
const specificUsers = users.filter(user => user.age >= 25 && user.active === true);
console.log("Active & Over 25:", specificUsers);


// advanced reduce
const averageAge = users.reduce((acc, user, index, array) => {
    acc += user.age;

    if(index === array.length - 1) {
        return acc / array.length;
    }

    return acc;
}, 0);

console.log("Average Age:", averageAge);


// method chainning
const result = users
    .filter(user => !user.active)
    .sort((a, b) => a.age - b.age)
    .map(user => user.name);

    console.log("Inactive users sorted by age:", result);