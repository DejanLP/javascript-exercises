const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let summ = 0;
	for(let i = 0; i < array.length; i++) {
    summ += parseInt(array[i]);
  }
  return summ;
};

const multiply = function(array) {
  let summ = 1;
	for(let i = 0; i < array.length; i++) {
    summ *= parseInt(array[i]);
  }
  return summ;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let fac = 1;
  for(let i =a; i>0; i--) {
    fac *= parseInt(i);
  }
  return fac;
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
