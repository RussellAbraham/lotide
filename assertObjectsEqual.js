
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  // check that both objects have the same number of properties
  // if they are not equal we can return false
  if (keys1.length !== keys2.length) {
    return false;
  }
  // loop trhough the keys and compare the values
  for (let key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    if (Array.isArray(val1) && Array.isArray(val2)) {
      if (!eqArrays(val1, val2)) {
        return false;
      }
    }
    if (object1[key] === object2[key]) {
      return true;
    }
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  try {
    if (eqObjects(actual,expected)) {
      console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
      // return `✅ Assertion Passed: ${arr1} === ${arr2}`
    } else {
      throw new Error(`🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
  } catch (error) {
    console.error(error.message);
    // return error.message
  } finally {
    console.log('Assertion Comleted.');
    //return 'Assertion Completed.';
  }  
};


const johnSmith = { name : 'John Smith', age : 123, limbs : ['left arm', 'right arm', 'left leg', 'right leg'] };

assertObjectsEqual(johnSmith, johnSmith); // pass
assertObjectsEqual(johnSmith, this); // fail
