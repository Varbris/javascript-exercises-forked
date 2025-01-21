const repeatString = function (text, num) {
  let repeatedString = "";
  if (num < 0) {
    repeatedString = "ERROR";
  } else {
    for (let i = 0; i < num; i++) {
      if (num == 0) {
        break;
      }
      repeatedString += text;
    }
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
