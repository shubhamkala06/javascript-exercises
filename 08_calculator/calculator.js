const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b
};

const sum = function(array) {
	let sum = 0;
  return array.reduce((accumulater,currentvalue)=>{return accumulater +currentvalue},sum);      //taken from internet
};

const multiply = function(array) {
  let product = 1;
  return array.reduce((accumulater,currentvalue)=>{return accumulater*currentvalue},product);     //taken from internet
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let factorial = 1;
  for(;num>1;num--){
    factorial *= num;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
