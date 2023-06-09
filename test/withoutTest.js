const without = require('../without');

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

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);