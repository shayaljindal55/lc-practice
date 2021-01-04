const clone = require('rfdc')() // Returns the deep copy function
clone({a: 37, b: {c: 3700}}) // {a: 37, b: {c: 3700}}