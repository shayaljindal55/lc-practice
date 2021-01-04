// Deep copying array of nested objects in javascript

// Sample:
var original1 = [
  { name: "adam", age: "21" },
  { name: "freddie", age: "35", children: [{ name: "mercury", age: "25" }] },
  {
    name: "jim",
    age: "35",
    children: [
      { name: "morrison", age: "25", children: [{ name: "some", age: "40" }] },
    ],
  },
];
var original2 = [1, { foo: "bar" }, ["a", "b"], new Date()];

// Solution 1 : Deep copy with JSON.parse/stringify
var finalcopy1 = JSON.parse(JSON.stringify(original1)); // it won't handle Date, RegExp, undefined, etc. values correctly unless we write a replacer and a reviver.
console.log("copy", finalcopy1);

// Solution 2
var toString = Object.prototype.toString;
function deepCopy(obj) {
  var rv;

  switch (typeof obj) {
    case "object":
      if (obj === null) {
        // null => null
        rv = null;
      } else {
        switch (toString.call(obj)) {
          case "[object Array]":
            // It's an array, create a new array with
            // deep copies of the entries
            rv = obj.map(deepCopy);
            break;
          case "[object Date]":
            // Clone the date
            rv = new Date(obj);
            break;
          case "[object RegExp]":
            // Clone the RegExp
            rv = new RegExp(obj);
            break;
          // ...probably a few others
          default:
            // Some other kind of object, deep-copy its
            // properties into a new object
            rv = Object.keys(obj).reduce(function (prev, key) {
              prev[key] = deepCopy(obj[key]);
              return prev;
            }, {});
            break;
        }
      }
      break;
    default:
      // It's a primitive, copy via assignment
      rv = obj;
      break;
  }
  return rv;
}

console.log(JSON.stringify(original2));
var b = deepCopy(original2);
const finalcopy2 = JSON.stringify(b);
console.log(finalcopy2);



