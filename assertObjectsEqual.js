const eqObjects = require('./eqObjects');
/**
 * Compares two objects for equality and prints an assertion message.
 *
 * @param {Object} actual - The actual object to compare.
 * @param {Object} expected - The expected object to compare against.
 * @returns {void}
 */
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  try {
    if (eqObjects(actual,expected)) {
      console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      // return `✅ Assertion Passed: ${arr1} === ${arr2}`
    } else {
      throw new Error(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  } catch (error) {
    console.error(error.message);
    // return error.message
  } finally {
    console.log('Assertion Comleted.');
    //return 'Assertion Completed.';
  }  
};

module.exports = assertObjectsEqual;