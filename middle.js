/**
 * Returns the middle element(s) of an array.
 *
 * @param {Array} array - The array to query.
 * @returns {Array} - The middle element(s) of the array. If the array has an odd length,
 * returns a single-element array with the middle element. If the array has an even length,
 * returns a two-element array with the two middle elements. If the array has two or fewer elements,
 * returns an empty array.
 */
const middle = function(array) {
  const length = array.length;
  // If the array has 2 or less elements, return an empty array
  if (array.length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    // If array has an odd number of elements, return the middle element
    // Find the middle index by dividing the length by 2 and rounding down
    const middle = Math.floor(length / 2);
    // Return an array with the middle element
    return [array[middle]];
  } else {
    // If array has an even number of elements, return the 2 middle elements
    // Calculate the indices of the two middle elements
    const middle1 = length / 2 - 1;
    const middle2 = length / 2;
    // Return an array with the two middle elements
    return [array[middle1], array[middle2]];
  }
};

module.exports = middle;