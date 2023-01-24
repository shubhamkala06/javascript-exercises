function round(value, precision) {
  var multiplier = Math.pow(10, precision || 1);
  return Math.round(value * multiplier) / multiplier;
}

const convertToCelsius = function(temp) {
  result = round((temp - 32)*(5/9));
  return result;
};

const convertToFahrenheit = function(temp) {
  result = round((temp*(9/5))+32);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
