/**
 * Finds the first key in the object whose value matches the given value.
 *
 * @param {Object} object - The object to search.
 * @param {*} value - The value to match.
 * @returns {string|undefined} - The key of the matched value, or undefined if no match is found.
 */
const findKeyByValue = function(object, value) {
  // loop over the objects keys
  for (let key in object) {
    // check for the value provided
    if (object[key] === value) {
      // return the key from the object
      return key;
    }
  }
};

module.exports = findKeyByValue;