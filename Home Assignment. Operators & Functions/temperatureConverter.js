// Variable name for Kelvin temperature.
let tempKelvin

// A function that converts Celsius to Kelvin.
function celsiusToKelvin(tempCelsius){
    tempKelvin = tempCelsius + 273.15;
    return tempKelvin;
}

// A function that converts Fahrenheit to Kelvin.
function fahrenheitToKelvin(tempFahrenheit){
    tempKelvin = (tempFahrenheit - 32) * 5/9 + 273.15;
    return tempKelvin;
}

//Displays the result
console.log(celsiusToKelvin(32));
console.log(fahrenheitToKelvin(32));
