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

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [3,2,1]);