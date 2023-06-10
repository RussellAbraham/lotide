const findKey = require('../findKey');

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

// Example data
const data = {
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
};
// Test case 1: Callback returns true for "noma"

const result1 = findKey(data, x => x.stars === 2);
assertEqual(result1, "noma");

// Test case 2: Callback returns true for "Akaleri"
const result2 = findKey(data, x => x.stars > 2);
assertEqual(result2, "Akaleri");

// Test case 3: Callback returns true for "Ora"
const result3 = findKey(data, x => x.stars === 2 && x.name === "Ora");
assertEqual(result3, undefined);