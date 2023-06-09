const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true); // Empty arrays, should return true
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // Same elements in the same order, should return true
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // Different last element, should return false
assertEqual(eqArrays([1, 2, 3], [1, 2]), false); // Different lengths, should return false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // Same elements in different order, should return false
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "c"]), true); // Same elements (strings), should return true
assertEqual(eqArrays(["a", "b", "c"], ["a", "b", "d"]), false); // Different last element (strings), should return false
assertEqual(eqArrays(["a", "b", "c"], ["c", "b", "a"]), false); // Same elements in different order (strings), should return false
assertEqual(eqArrays([true, false], [true, false]), true); // Same elements (booleans), should return true
assertEqual(eqArrays([true, false], [false, true]), false); // Same elements in different order (booleans), should return false
