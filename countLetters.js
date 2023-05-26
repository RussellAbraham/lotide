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

// simple solution
const countLetters = function(string) {
  // initialize object to return as our result
  const result = {};
  // loop over the string
  for (let letter of string) {
    // use regex to test only alphabetic characters and not numbers/spaces/commas etc..
    if (/[A-Za-z]/.test(letter)) {
      // if the letter already exists in the result object, increment its count
      if (result[letter] > 0) {
        result[letter]++;
      } else { // if the letter doesn't exist in the result object, set its count to 1
        result[letter] = 1;
      }
    }
  }
  // return the result
  return result;
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

// better solution with helper function

// function to check if string contains alphabetic character
const isAlpha = function(string) {
  // Get the character code of the first character in the string
  let char = string.charCodeAt(0);
  // Check if the character is not an uppercase or lowercase alphabetic letter
  if (!(char > 64 && char < 91) && // uppercase[A-Z]
    !(char > 96 && char < 123)) { // lowercase[a-z]
    return false; // Not an alphabetic letter
  }

  return true; // Alphabetic letter
};

const countLettersOptimized = function(string) {
  // initialize object to return as our result
  const result = {};
  // loop over the string
  for (let letter of string) {
    // Check if the character is an alphabetic letter
    if (isAlpha(letter)) {
      // if the letter already exists in the result object, increment its count
      // if the letter doesn't exist in the result object, set its count to 1
      result[letter] = ++result[letter] || 1;
    }
  }
  return result;
};

assertEqual(JSON.stringify(countLettersOptimized(stringToTest)), JSON.stringify(objectToCompare));