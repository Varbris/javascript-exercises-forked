const add = function (var1, var2) {
  return var1 + var2;
};

const subtract = function (var1, var2) {
  return var1 - var2;
};

const sum = function (arr) {
  return arr.reduce(function (sum, item) {
    return (sum += item);
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce(function (sum, item) {
    return (sum *= item);
  });
};

const power = function (var1, var2) {
  return Math.pow(var1, var2);
};

const factorial = function (var1) {
  let result = 1;
  for (let i = var1; i > 0; i--) {
    result *= i;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
