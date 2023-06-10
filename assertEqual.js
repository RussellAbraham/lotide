/**
 * Compares two values and logs a message indicating whether they are equal or not.
 *
 * @param {*} actual - The actual value.
 * @param {*} expected - The expected value.
 * @returns {void}
 */
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