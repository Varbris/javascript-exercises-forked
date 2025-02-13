const add = function (var1, var2) {
  return var1 + var2;
};

const subtract = function (var1, var2) {
  return var1 - var2;
};

const sum = function (arr) {
  let result = 0;
  if (arr.length !== 0) {
    arr.forEach((element) => {
      result += element;
    });
  } else {
    return result;
  }
  return result;
};

const multiply = function (arr) {
  let result = 0;
  arr.forEach(function (element) {
    if (result === 0) {
      result = element;
    } else {
      result *= element;
    }
  });
  return result;
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
