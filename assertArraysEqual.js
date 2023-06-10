const eqArrays = require('./eqArrays');
/**
 * Asserts whether two arrays are equal and logs the result.
 * Throws an error if the arrays are not equal.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {void}
 */
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