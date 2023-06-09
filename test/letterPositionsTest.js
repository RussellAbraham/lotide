const letterPositions = require('../letterPositions');

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
    if (eqArrays(arr1, arr2)) {
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

// Test the letterPositions function
const sentence = "lighthouse in the house";
const expectedOutput = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

// Call the letterPositions function
const result = letterPositions(sentence);

// Assert that the result matches the expected output
assertArraysEqual(result['l'], expectedOutput['l']);
assertArraysEqual(result['i'], expectedOutput['i']);
assertArraysEqual(result['g'], expectedOutput['g']);
assertArraysEqual(result['h'], expectedOutput['h']);
assertArraysEqual(result['t'], expectedOutput['t']);
assertArraysEqual(result['o'], expectedOutput['o']);
assertArraysEqual(result['u'], expectedOutput['u']);
assertArraysEqual(result['s'], expectedOutput['s']);
assertArraysEqual(result['e'], expectedOutput['e']);
assertArraysEqual(result['n'], expectedOutput['n']);