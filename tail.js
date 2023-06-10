/**
 * Retrieves all elements of an array except the first element.
 *
 * @param {Array} array - The input array.
 * @returns {Array} - A new array containing all elements except the first element.
 */
const tail = function(array) {
  if (array.length <= 1) {
    return []; // If the array has 1 or fewer elements, return an empty array
  }
  return array.slice(1); // Return a new array containing all elements except the first element
};

module.exports = tail;