/**
 * Counts the occurrences of each letter in a string.
 *
 * @param {string} string - The input string to count the letters.
 * @returns {Object} - An object with letters as keys and their respective counts as values.
 */
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

module.exports = countLetters;

/*
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
*/