function orderByWeight(strng) {
    // convert input string into an array
  const inputNumbers = strng.split(" ");
  
  const mappedInputAndWeights = inputNumbers.map((num) => {
    return {
      originalValue: num,
      // to calculate weigth, convert the number to string,
      // split the string and get an
      // array with all digits and perform a reduce
      // for every part and return the sum.
      weight: num.split("").reduce(function (prevDigit, currDigit) {
        return parseInt(prevDigit) + parseInt(currDigit);
      }, 0),
    };
  });
  
  const sortedWeightArray = mappedInputAndWeights.sort((inputA, inputB) => {
    // check if the two input numbers are equal,
    // if yes, do string localeCompare to check
    // if no, sort numbers in asc order
    return inputA.weight === inputB.weight
      ? inputA.originalValue.localeCompare(inputB.originalValue)
      : inputA.weight - inputB.weight;
  });
  
  // constrct final sorted array of original input values based on weight
  const sortedInputArray = sortedWeightArray.map((input) => {
    return input.originalValue;
  });

  // join the sorted array to construct string output
  return sortedInputArray.join(" ");
}