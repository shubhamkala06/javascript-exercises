function round(value, precision) {            //taken from internet
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



//Don't know that even without exporting round function, other files were able to use round inside converToCelsius and convertToFarenheit

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
