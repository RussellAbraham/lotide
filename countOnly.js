/**
 * Counts the occurrences of specific items in an array based on a provided criteria.
 *
 * @param {Array} allItems - The array of items to be counted.
 * @param {Object} itemsToCount - The object specifying the items to count and their criteria.
 * @returns {Object} - An object containing the counts of the specified items.
 */
const countOnly = function(allItems, itemsToCount) {
  // initialize the object to return
  const result = {};
  // loop over the array
  for (let item of allItems) {
    // check if the object passed in has the item we need
    if (itemsToCount[item]) {
      // add items to our result object
      result[item] = ++result[item] || 1;
    }
  }
  // return our result
  return result;
};

module.exports = countOnly;