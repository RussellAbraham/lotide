const eqArrays = require('./eqArrays');
/**
 * Checks if two objects have identical keys with identical values.
 *
 * @param {Object} object1 - The first object to compare.
 * @param {Object} object2 - The second object to compare.
 * @returns {boolean} - Returns true if both objects have identical keys with identical values, otherwise false.
 */
// Returns true if both objects have identical keys with identical values.
// Otherwise you get false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check that both objects have the same number of properties
  // if they are not equal we can return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  // loop trhough the keys and compare the values
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    }
    if (object1[key] === object2[key]) {
      return true;
    }
  }
};

module.exports = eqObjects;