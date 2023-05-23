// functions for testing flatten - LHL directive

const assertEqual = function(actual, expected) {
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

// take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array

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

// demo
const test = [1,2,[3,4],5,[6]];
const runTest = flatten(test);
assertEqual(eqArrays(runTest, [1, 2, 3, 4, 5, 6]), true);

// small change to the function to handle nested arrays
const flattenRecursive = function(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      const nestedArray = flattenRecursive(array[i]);
      result.push(...nestedArray);
    } else {
      result.push(array[i]);
    }
  }

  return result;
};

const nestedArray = [1, [2, [3, 4], 5], 6, [7, 8]];
const flattenedArray = flattenRecursive(nestedArray);
assertEqual(eqArrays(flattenedArray, [1, 2, 3, 4, 5, 6, 7, 8]), true);
