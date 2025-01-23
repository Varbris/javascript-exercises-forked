const sumAll = function (num1, num2) {
  let result = 0;
  if (Math.sign(num1) === -1 || Math.sign(num2) === -1) {
    return "ERROR";
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return "ERROR";
  }

  if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      result += i;
    }
  } else {
    for (let i = num2; i <= num1; i++) {
      result += i;
    }
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
