const countLetters = require('../countLetters');

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

const stringToTest = "Hello World!";
const objectToCompare = {
  H: 1,
  e: 1,
  l: 3,
  o: 2,
  W: 1,
  r: 1,
  d: 1
};
// use JSON.stringify to serialize the result for the test to work
//'{"H":1,"e":1,"l":3,"o":2,"W":1,"r":1,"d":1}'

assertEqual(JSON.stringify(countLetters(stringToTest)), JSON.stringify(objectToCompare));
