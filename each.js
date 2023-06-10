/**
 * Iterates over elements of an object or array, calling the iterator function for each element.
 * Supports arrays, array-like strings, and generic objects.
 *
 * @param {Object|Array|String} obj - The object or array to iterate over.
 * @param {Function} iterator - The iterator function to call for each element.
 * @param {Object} [context] - The context object to use as `this` inside the iterator function.
 * @returns {void}
 */
// custom each function to handle arrays, strings, and raw objects
const each = function (obj, iterator, context) {
  const breaker = {}; // Object used to break out of the loop iteration
  if (obj == null) return; // If the object is null or undefined, return early
  if (Array.isArray(obj) || (typeof obj === 'string' && obj.length !== undefined)) {
    // Handle arrays and array-like strings
    for (let i = 0, length = obj.length; i < length; i++) {
      // Call the iterator function with the current element, index, and the object
      if (iterator.call(context, obj[i], i, obj) === breaker) return;
    }
  } else if (typeof obj === 'object') {
    // Handle generic objects
    // Minimize property lookups within the loop
    const hasOwnProperty = Object.prototype.hasOwnProperty;
    // loop iterates over the keys of the object, calling the iterator function with the current value, key, and the object
    for (let key in obj) {
      // Check if the property belongs to the object itself (not inherited)
      if (hasOwnProperty.call(obj, key)) {
        // Call the iterator function with the current value, key, and the object
        // with the specified `context` as the `this` value
        if (iterator.call(context, obj[key], key, obj) === breaker) return;
      }
    }
  }
};

module.exports = each;