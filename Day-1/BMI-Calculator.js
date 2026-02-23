const weightKg = 70;
const heightMeters = 1.75 //meter

const bmi = weightKg / (heightMeters ** 2);

console.log("your BMI is: " + bmi.toFixed(1));

// conditional logic
if(bmi < 18.5) {
    console.log("Status: Underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Status: Normal weight");
} else {
    console.log("Status: Overweight");
}