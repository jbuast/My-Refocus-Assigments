function bmiCalculator (weight, height) {
    let bmi = (weight / ((height * height) 
    / 10000)).toFixed(2);
    return bmi;
}

let result = bmiCalculator(80,177);


if (result <= 18.5){
    console.log(`Your BMI is: ${result}. You are underweight`);
}
else if (result >= 18.5 && result <= 24.9){
    console.log(`Your BMI is: ${result}. You are normal`);
}
else if (result >= 25.0 && result <= 29.9){
    console.log(`Your BMI is: ${result}. You are overweight`);
}
else if (result >= 30.0){
    console.log(`Your BMI is: ${result}. You are obese`);
}
else{
    console.log(`Invalid Input`)
}