// celsius to fahrenheit

const celsiusInput = 30;
const farhenheitResult = (celsiusInput * 9/5) + 32;

console.log(`${celsiusInput}°C = ${farhenheitResult}°F`);
// output = 30°C = 86°F


// ===farhenheit to celsius=====
const farenheitInput = 98.6;
const celsiusResult = (farenheitInput - 32) * 5/9;

console.log(`${farenheitInput}°F = ${celsiusResult.toFixed(2)}°C`);

// output = 98.6°F = 37.00°C