/**
 * Searches for a key in an object based on the callback function's return value.
 *
 * @param {Object} object - The object to search in.
 * @param {Function} callback - The callback function that is called with each value in the object.
 *                             It should return a truthy value to find the corresponding key.
 * @returns {string|undefined} - The found key, or undefined if no key is found.
 */
const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;