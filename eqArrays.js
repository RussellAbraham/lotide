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
    if(arr1[i] !== arr2[i]){
      return false
    }
  }
  return true;
};