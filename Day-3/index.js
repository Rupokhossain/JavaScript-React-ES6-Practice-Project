// for each

/* const numbers = [1, 2, 3];
numbers.forEach(num => {
    console.log(num * 2);
}); */


// map
// const numbers = [1, 2, 3];
// const doubled = numbers.map(num => num * 2);
// console.log(doubled);


// filter
// const prices = [10, 50, 80, 120, 30];
// const expensive = prices.filter(p => p > 50);
// console.log(expensive);


// reduce
const cart = [10, 20, 30];
const total = cart.reduce((sum, price) => sum + price, 0);
console.log(total);