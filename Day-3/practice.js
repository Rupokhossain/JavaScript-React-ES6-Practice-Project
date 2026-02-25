// calculate total

const expenses = [500, 1200, 3000, 800, 1500, 100];

const totalExpenses = expenses.reduce((sum, amount) => sum + amount, 0);
console.log("Total Expenses:", totalExpenses);


// filter expense > 1000

const bigExpenses = expenses.filter(amount => amount > 1000);
console.log("Expenses over 1000:", bigExpenses);


//covert currency

const exchangeRate = 122;

const expensesInUSD = expenses.map(amount => (amount / exchangeRate).toFixed(2));
console.log("Expenses in USD:", expensesInUSD);