const tail = function(array) {
  if (array.length <= 1) {
    return []; // If the array has 1 or fewer elements, return an empty array
  }
  return array.slice(1); // Return a new array containing all elements except the first element
};

module.exports = tail;