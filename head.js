// Function to retrieve the first element of an array
const head = function(array) {
  // Check if the array is empty
  if (array.length === 0) {
    // If the array is empty, return undefined as there is no first element
    return undefined;
  }
  // If the array is not empty, return the first element
  return array[0];
};

// slightly more advanced. Handles array like objects and returns the first [n] elements of an array if specified
const first = function(array, n, guard) {
  // Check if `n` is provided and `guard` is not true
  if (n !== null && !guard) {
    // Use Array.prototype.slice to return a new array containing the first `n` elements of `array`
    return [].slice.call(array, 0, n);
  } else {
    // Return the first element of `array`
    return array[0];
  }
};

module.exports = head;