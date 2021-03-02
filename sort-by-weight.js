// You are provided a string containing a list of positive integers separated by a space (" "). Take each value and calculate the sum of its digits, which we call it's "weight". Then return the list in ascending order by weight, as a string joined by a space.

// For example 99 will have "weight" 18, 100 will have "weight"
// 1 so in the ouput 100 will come before 99.

// Example:

// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes:
// "100 180 90 56 65 74 68 86 99"

// When two numbers have the same "weight", let's consider them to be strings and not numbers:

// 100 is before 180 because its "weight" (1) is less than the one of 180 (9)
// and 180 is before 90 since, having the same "weight" (9) it comes before as a string.

// All numbers in the list are positive integers and the list can be empty.

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