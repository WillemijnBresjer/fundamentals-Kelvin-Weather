// Forecast today is 293 K:
const kelvin = 300;

// Celsius is 273 less than Kelvin, so the forecast today is:
const celsius = kelvin - 273;

// Since Fahrenheit = Celsius * (9/5) + 32, today's temperature in Fahrenheit is:
let fahrenheit = celsius * (9/5) + 32;

// Rounding down the temperature in Fahrenheit to the nearest integer:
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);