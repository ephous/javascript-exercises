const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(vals) {
	let summ=0;
  for (let i = 0; i < vals.length; i++){
    summ+=vals[i];
  }
  return summ;
};

const multiply = function(vals) {
	let product=1;
  for (let i = 0; i < vals.length; i++){
    product*=vals[i];
  }
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	if (a==0) {return 1;}
  if (a==1) {return a;}
  return a*factorial(a-1);
};

console.log( factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
