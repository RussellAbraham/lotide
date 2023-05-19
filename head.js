// function included to test equality. LHL directive
function assertEqual(actual, expected) {
  try {
    if (actual === expected) {
      console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      throw new Error(`🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log('Assertion completed.');
  }
};

function head(array){
  if(array.length === 0){
    return undefined;
  }
  return array[0];
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// slightly more advanced. Handles array like objects and returns the first [n] elements of an array if specified
function first(array, n, guard) {
  // Check if `n` is provided and `guard` is not true
  if (n != null && !guard) {
    // Use Array.prototype.slice to return a new array containing the first `n` elements of `array`
    return [].slice.call(array, 0, n);
  } else {
    // Return the first element of `array`
    return array[0];
  }
}