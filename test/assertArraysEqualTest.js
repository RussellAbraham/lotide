const assertArraysEqual = require('../assertArraysEqual');

// Test cases with expected pass
assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass: arrays are equal
assertArraysEqual([], []); // Pass: empty arrays are equal
assertArraysEqual(["a", "b", "c"], ["a", "b", "c"]); // Pass: arrays are equal
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass: arrays are equal
assertArraysEqual(["hello"], ["hello"]); // Pass: arrays are equal

// Test cases with expected failure
assertArraysEqual([1,2,3], [3,2,1]);
assertArraysEqual([1, 2, 3], [1, 2, 4]); // Fail: arrays are not equal
assertArraysEqual([1, 2, 3], [1, 2]); // Fail: arrays have different lengths
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Fail: arrays have different order
assertArraysEqual(["a", "b", "c"], ["c", "b", "a"]); // Fail: arrays have different order
assertArraysEqual(["hello"], ["world"]); // Fail: arrays have different elements
