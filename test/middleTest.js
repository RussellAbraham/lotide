const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

const testEven = [1,2,3,4,5,6];
const testOdd = [1,2,3,4,5];

// Passing tests - middle elements or empty array
assertArraysEqual(middle(testEven), [3,4]);
assertArraysEqual(middle(testOdd), [3]);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle(["a", "b", "c"]), ["b"]);
assertArraysEqual(middle(["a"]), []);
assertArraysEqual(middle([]), []);

// Failing tests - incorrect middle elements
assertArraysEqual(middle([1, 2, 3]), [1]); // Fails, expected [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [4]); // Fails, expected [3]
assertArraysEqual(middle(["a", "b", "c"]), ["a"]); // Fails, expected ["b"]
assertArraysEqual(middle(["a"]), ["a"]); // Fails, expected []
assertArraysEqual(middle([]), [1]); // Fails, expected []