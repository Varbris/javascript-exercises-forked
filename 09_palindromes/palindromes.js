const palindromes = function (text) {
  const textLowered = text.toLowerCase();
  const arr = textLowered.split("");
  const filterArrFromUnique = arr.filter(function (character) {
    const alphabetAndNumber = "abcdefghijklmnopqrstuvwxyz0123456789";
    return alphabetAndNumber.includes(character);
  });
  const cleanText = filterArrFromUnique.join("");

  //test the text is can be reversed
  const reversedArr = filterArrFromUnique.reverse().join("");
  return reversedArr === cleanText;
};

// Do not edit below this line
module.exports = palindromes;
