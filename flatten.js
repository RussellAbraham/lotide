/**
 * Flattens a nested array into a single-level array.
 *
 * @param {Array} array - The array to flatten.
 * @returns {Array} - The flattened array.
 */
const flatten = function(array) {
  // initialize the array to return
  const result = [];
  // loop over the array
  for (let i = 0; i < array.length; i++) {
    // check if each indexed item is its own array
    if (Array.isArray(array[i])) {
      // loop through the identified array
      for (let j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
};

module.exports = flatten;

/*
// small change to the function to handle nested arrays
const flattenRecursive = function(array) {
  // Initialize an empty array to store the flattened elements
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      // Check if the current element is an array
      // Recursively call flattenRecursive on the nested array
      const nestedArray = flattenRecursive(array[i]);
      // Spread the elements of the nestedArray and push them into the result array
      result.push(...nestedArray);
    } else {
      // If the current element is not an array, push it into the result array
      result.push(array[i]);
    }
  }

  return result; // Return the flattened result array
};
const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenRecursive(nestedArray);

const flattenReduce = function(array) {
  return array.reduce(function(result, item) {
    // Check if the current item is an array
    if (Array.isArray(item)) {
      // If it is an array, recursively call flattenReduce on it
      const nestedArray = flattenReduce(item);
      // Concatenate the flattened nestedArray with the result array
      return result.concat(nestedArray);
    } else {
      // If the current item is not an array, directly concatenate it with the result array
      return result.concat(item);
    }
  }, []); // Initialize the initial value of the result as an empty array
};
const nestedArray1 = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray1 = flattenReduce(nestedArray1);
*/