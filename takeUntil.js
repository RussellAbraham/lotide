/**
 * Creates a new array with elements from the original array until the callback returns a truthy value.
 *
 * @param {Array} array - The original array.
 * @param {Function} callback - The callback function that determines the stopping condition.
 *                             It should return a truthy value to stop iterating.
 * @returns {Array} - A new array containing the elements until the stopping condition is met.
 */
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      // If the callback returns a truthy value, stop iterating
      break;
    }
    results.push(item); // Push the item to the results array
  }
  return results;
};

module.exports = takeUntil;