/**
 * Returns an object that maps each letter in the input sentence to an array of its positions.
 *
 * @param {string} sentence - The input sentence.
 * @returns {Object} - An object with letter positions.
 */
const letterPositions = function(sentence) {
  const positions = {}; // Initialize an empty object to store the letter positions
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i]; // Get the current character in the sentence
    if (character !== " ") { // Exclude spaces from consideration
      if (positions[character]) {
        // If the letter already exists as a key in the positions object,
        // append the current index to the corresponding array
        positions[character].push(i);
      } else {
        // If the letter doesn't exist as a key, create a new array with
        // the current index as the initial value for that letter
        positions[character] = [i];
      }
    }
  }
  return positions; // Return the object with letter positions
};

module.exports = letterPositions;