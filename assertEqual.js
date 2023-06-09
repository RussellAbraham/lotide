/* assertEqual function is used to compare two values and assert that they are equal. */

const assertEqual = function(actual, expected) {
  try {
    // Check if the actual value is equal to the expected value
    if (actual === expected) {
      // If they are equal, log a success message
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      // If they are not equal, throw an error with a failure message
      throw new Error(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  } catch (error) {
    // If an error is thrown, catch it and log the error message
    console.error(error.message);
  } finally {
    // Finally, regardless of the outcome, log a completion message
    console.log('Assertion completed.');
  }
};

module.exports = assertEqual;