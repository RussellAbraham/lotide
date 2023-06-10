/**
 * Checks if two arrays are equal by comparing their elements.
 *
 * @param {Array} arr1 - The first array to compare.
 * @param {Array} arr2 - The second array to compare.
 * @returns {boolean} - True if the arrays are equal, false otherwise.
 */
const eqArrays = function(arr1, arr2) {
  // Check if the arrays have different lengths
  if (arr1.length !== arr2.length) {
    return false; // Return false if lengths are different
  }
  // Iterate over the elements of the arrays
  for (let i = 0; i < arr1.length; i++) {
    // Check if the elements at the same index are not equal
    if (arr1[i] !== arr2[i]) {
      return false; // Return false if elements are not equal
    }
  }
  // If all elements are equal, return true
  return true;
};

module.exports = eqArrays;