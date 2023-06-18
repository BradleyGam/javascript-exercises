const add = function(...args) {
  return args.reduce((sum, item) => sum + item, 0);
};

const subtract = function(...args) {
	return args.slice(1).reduce((sum, item) => sum - item, args[0]);
};

const sum = function(arr) {
	return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(...args) {
  return args.slice(1).reduce((sum, item) => sum * item, args[0]);
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
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
