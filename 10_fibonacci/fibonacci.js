const fibonacci = function (num) {
  const cleanInput = parseInt(num);

  if (cleanInput === 0) {
    return 0;
  } else if (cleanInput === 1) {
    return 1;
  } else if (cleanInput < 0) {
    return "OOPS";
  }
  return fibonacci(cleanInput - 1) + fibonacci(cleanInput - 2);
};

// Do not edit below this line
module.exports = fibonacci;
