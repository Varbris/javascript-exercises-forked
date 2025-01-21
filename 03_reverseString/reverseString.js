const reverseString = function (text) {
  let arrText = text.split("");
  let arrTextReversed = [];
  let result = "";

  for (let i = 0; i < arrText.length; i++) {
    let j = arrText.length - 1;
    arrTextReversed[i] = arrText[j - i];
    result += arrTextReversed[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;
