const takeUntil = require('../takeUntil');

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

// Test Case 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const expected1 = [1, 2, 5, 7, 2];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, expected1);

// Test Case 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const expected2 = ['I\'ve', 'been', 'to', 'Hollywood'];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, expected2);

// Test Case 3 (Additional test case)
const data3 = [1, 3, 5, 7, 9];
const expected3 = [1, 3, 5, 7, 9];
const results3 = takeUntil(data3, x => x < 0);
assertArraysEqual(results3, expected3);
