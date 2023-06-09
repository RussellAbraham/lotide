
// assertion test - LHL directive
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  try {
    if (eqArrays(arr1,arr2)) {
      console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
      // return `✅ Assertion Passed: ${arr1} === ${arr2}`
    } else {
      throw new Error(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  } catch (error) {
    console.error(error.message);
    // return error.message
  } finally {
    console.log('Assertion Comleted.');
    //return 'Assertion Completed.';
  }
};

// Test 1: Mapping array of numbers to their squares
const numbers = [1, 2, 3, 4, 5];
const squares = map(numbers, (num) => num * num);
assertArraysEqual(squares, [1, 4, 9, 16, 25]);

// Test 2: Mapping array of strings to their lengths
const strings = ['apple', 'banana', 'cherry'];
const lengths = map(strings, (str) => str.length);
assertArraysEqual(lengths, [5, 6, 6]);

// Test 3: Mapping array of objects to their properties
const objects = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 }
];
const names = map(objects, (obj) => obj.name);
assertArraysEqual(names, ['John', 'Jane', 'Bob']);

// Test with an array
const arr = [1, 2, 3, 4, 5];
const doubledArr = _map(arr, function (num) {
  return num * 2;
});
console.log(doubledArr); // Output: [2, 4, 6, 8, 10]

// Test with an object
const obj = { a: 1, b: 2, c: 3 };
const squaredValues = _map(obj, function (value) {
  return value * value;
});
console.log(squaredValues); // Output: [1, 4, 9]

// Test with a string
const str = "Hello";
const uppercaseChars = _map(str, function (char) {
  return char.toUpperCase();
});
console.log(uppercaseChars); // Output: ["H", "E", "L", "L", "O"]