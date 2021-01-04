// Solution : Deep copy with Ramda
import R from "ramda"; // Import the entire ramda library
// import { clone } from "ramda" // Alternatively: Import just the clone methods from ramda

const nestedArray1 = [["😉"], ["😊"], ["😇"]];
// This array is nested 1 level, though the behavior is the same with any degree of nesting

const notACopyWithEquals1 = nestedArray1;
console.log(nestedArray[0] === notACopyWithEquals1[0]); // true -- Not a copy (same reference)

const shallowCopyWithSpread1 = [...nestedArray1];
console.log(nestedArray1[0] === shallowCopyWithSpread1[0]); // true -- Shallow copy (same reference)

const deepCopyWithRamdaClone = R.clone(nestedArray1);
console.log(nestedArray1[0] === deepCopyWithRamdaClone[0]); // false -- Deep copy (different reference)

// Try to change the reference for the 1st element, won't work for any copy
nestedArray1[0] = "🧐";
// Try to change the nested reference for the 3rd element:
nestedArray1[2][0] = "😈";

console.log(...nestedArray1); // 🧐 ["😊"] ["😈"]
console.log(...notACopyWithEquals1); // 🧐 ["😊"] ["😈"]
console.log(...shallowCopyWithSpread1); // ["😉"] ["😊"] ["😈"]
console.log(...deepCopyWithRamdaClone); // ["😉"] ["😊"] ["😇"]