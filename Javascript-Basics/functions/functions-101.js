// Function - input (arguments), code, output

let greetUser = function () {
    console.log("Welcome!");
}
greetUser();

let squared = function(num){ 
   let result = Math.pow(num, 2);
    console.log(result);
    return result;
}

let value = squared(5);
console.log(value);

// challenge creat a function called convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (tempF) {
    let tempC = (tempF - 32) * 5 / 9;
    console.log("The Fahrenheit Temp is " + tempF + " which is the same as " + tempC +"degrees Celsius")
    return tempC
}

convertFahrenheitToCelsius(32);
convertFahrenheitToCelsius(68);