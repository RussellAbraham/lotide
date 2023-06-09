const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  try {
    // Check if the arrays are equal using eqArrays function
    if (eqArrays(arr1, arr2)) {
      // If arrays are equal, log a success message
      console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
      // If arrays are not equal, throw an error
      throw new Error(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  } catch (error) {
    // Catch any errors and log the error message
    console.error(error.message);
  } finally {
    // Log a completion message
    console.log('Assertion Completed.');
  }
};

module.exports = assertArraysEqual;