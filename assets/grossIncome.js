// Michigan Income Tax - 4.25%
// OASDI Tax - 6.2% of the first $160,200
// Medicare Tax - 1.45%
// Additional Medicare Tax - 0.9% over $200,000

// Gross Income is your wage before taxes and other deductions have been taken out.

function grossIncomeCalculation(){
    let income = parseInt(prompt("Enter your Income:"), 10);
    console.log("Provided Income: " + income);
    document.getElementById("grossdemo").innerHTML =
        "Gross Income: " + income + ".";
}