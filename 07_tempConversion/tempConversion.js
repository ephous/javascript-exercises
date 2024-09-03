// NOTE: number.toFixed(1) always returns a decimal, 
// even if it is 0; eg, 0.0 rather than 0

const convertToCelsius = function(tempF) {
  let result = 5 * (tempF - 32)/9;
  return Math.round(10 * result)/10;
};

const convertToFahrenheit = function(tempC) {
  result = 9 * tempC / 5 + 32;
  return Math.round(10 * result)/10;
};

//console.log( convertToCelsius(32));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
