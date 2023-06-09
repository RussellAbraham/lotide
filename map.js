/**
 * Applies a callback function to each element in an array and returns an array of the results.
 *
 * @param {Array} array - The input array.
 * @param {Function} callback - The callback function to apply to each element.
 * @returns {Array} - An array of the results after applying the callback function to each element.
 */
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

/* custom map function handles objects, strings, and arrays
const each = require('./each');
const _map = function (collection, iterator, context) {
  const results = []; // Create an empty array to store the mapped results
  // Use the each function to iterate over the collection
  each(collection, function (value, index, collection) {
    // Call the iterator function with the current value, index, and collection
    // with the specified `context` as the `this` value
    results.push(iterator.call(context, value, index, collection));
    // Push the result of the iterator function to the results array
  });
  return results; // Return the mapped results array
};
*/

module.exports = map;