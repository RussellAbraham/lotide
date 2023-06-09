/**
 * Creates a new array with all occurrences of specified items removed from the source array.
 *
 * @param {Array} source - The source array.
 * @param {Array} itemsToRemove - The items to remove from the source array.
 * @returns {Array} - A new array with the specified items removed.
 */
const without = function(source, itemsToRemove) {
  return source.filter((element) => !itemsToRemove.includes(element));
};

module.exports = without;