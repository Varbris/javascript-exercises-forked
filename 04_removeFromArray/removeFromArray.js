const removeFromArray = function (arrayVar, ...rest) {
  const newArray = [];
  arrayVar.forEach((element) => {
    if (!rest.includes(element)) {
      newArray.push(element);
    }
  });

  console.log(newArray);
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
