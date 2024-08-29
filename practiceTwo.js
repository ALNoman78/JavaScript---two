// BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

let weightBmi = 43;

    if (weightBmi < 18.4) {
    console.log("You are under weight");
    } else if (weightBmi >= 18.5 && weightBmi <= 24.9) {
    console.log("You are Normal");
    } else if (weightBmi >= 25 && weightBmi <= 29.9) {
    console.log("You are over weight");
    } else {
    console.log(" You are obese.");
    }
