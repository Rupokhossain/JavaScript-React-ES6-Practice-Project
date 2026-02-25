const expenses = [
  { id: 1, title: "Laptop Repair", amount: 2500, category: "Electronics" },
  { id: 2, name: "Grocery", amount: 1200, category: "Food" },
  { id: 3, title: "Internet Bill", amount: 500, category: "Utilities" },
  { id: 4, title: "New Watch", amount: 3500, category: "Personal" },
  { id: 5, title: "Dinner", amount: 800, category: "Food" },
  { id: 6, title: "Rent", amount: 10000, category: "Housing" },
];

// map use kore data formate kora
const expensesList = expenses.map(item => `${item.title || item.name}: ${item.amount} BDT`);


//filter use
const highExpenses = expenses.filter(item => item.amount > 1000);

// total cost (reduce)
const totalAmount = expenses.reduce((total, item) => total + item.amount, 0);

// summary print(for each)
console.log("--- My Expense Summary ---");
console.log("Total Expenses:", totalAmount, "BDT");

expensesList.forEach(item => console.log("-" + item));

highExpenses.forEach(item => {
    console.log(`⚠️  ${item.title || item.name} - ${item.amount} BDT`);
});


// category onujai filter
const foodExpenses = expenses
        .filter(item => item.category === "Food")
        .reduce((sum, item) => sum + item.amount, 0);

        console.log(`Total spent on Food: ${foodExpenses} BDT`);