// - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
// BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.

let weight = 68;
let height = 1.72;
let bmi = weight / (height ** 2);

if (bmi < 18.4) {
  console.log("You are under weight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("You are Normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("You are over weight");
} else {
  console.log(" You are obese.");
}
