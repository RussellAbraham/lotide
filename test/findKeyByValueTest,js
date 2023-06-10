const findKeyByValue = require('../findKeyByValue');

// assertion test LHL directive
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

// test
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);