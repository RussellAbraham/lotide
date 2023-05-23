// equality test LHL directive
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  try {
    if (eqArrays(arr1,arr2)) {
      console.log(`✅ Assertion Passed: ${arr1} === ${arr2}`);
      // return `✅ Assertion Passed: ${arr1} === ${arr2}`
    } else {
      throw new Error(`🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    }
  } catch (error) {
    console.error(error.message);
    // return error.message
  } finally {
    console.log('Assertion Comleted.');
    //return 'Assertion Completed.';
  }
};

const middle = function(array) {
  const length = array.length;
  // if the array has 2 or less elements, return an empty array
  if (array.length <= 2) {
    return [];
  } else if (length % 2 === 1) {
    // if array has an odd number of elements, return the middle element
    // find the middle index
    const middle = Math.floor(length / 2);
    return [array[middle]];
  } else {
    // if array has an even number of elements, return the 2 middle elements
    const middle1 = length / 2 - 1;
    const middle2 = length / 2;
    return [array[middle1], array[middle2]];
  }
};

const testEven = [1,2,3,4,5,6];
const testOdd = [1,2,3,4,5];

assertArraysEqual(middle(testEven), [3,4]);
assertArraysEqual(middle(testOdd), [3]);