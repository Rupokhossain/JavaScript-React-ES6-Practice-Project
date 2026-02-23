const weight = "70";

if(typeof weight !== "number") {
    console.log("Warning: weight is not a number. Trying to convert...");

    const convertedWeight = Number(weight);

    if(isNaN(convertedWeight)) {
        console.log("Error: Invalid weight input!");
    } else {
        console.log("Success: Weight converted to " + convertedWeight);
    }
}