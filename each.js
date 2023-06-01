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

// Test 
(function () {
  // Test case 1: Array iteration
  const arr = [1, 2, 3, 4, 5];
  console.log('Array iteration:');
  each(arr, (element, index, array) => {
    console.log(`Element: ${element}, Index: ${index}, Array: [${array}]`);
  });
  // Output:
  // Element: 1, Index: 0, Array: [1,2,3,4,5]
  // Element: 2, Index: 1, Array: [1,2,3,4,5]
  // Element: 3, Index: 2, Array: [1,2,3,4,5]
  // Element: 4, Index: 3, Array: [1,2,3,4,5]
  // Element: 5, Index: 4, Array: [1,2,3,4,5]

  // Test case 2: String iteration
  const str = 'Hello';
  console.log('String iteration:');
  each(str, (character, index, string) => {
    console.log(`Character: ${character}, Index: ${index}, String: '${string}'`);
  });
  // Output:
  // Character: H, Index: 0, String: 'Hello'
  // Character: e, Index: 1, String: 'Hello'
  // Character: l, Index: 2, String: 'Hello'
  // Character: l, Index: 3, String: 'Hello'
  // Character: o, Index: 4, String: 'Hello'

  // Test case 3: Object iteration
  const obj = { a: 1, b: 2, c: 3 };
  console.log('Object iteration:');
  each(obj, (value, key, object) => {
    console.log(`Key: ${key}, Value: ${value}, Object:`, object);
  });
  // Output:
  // Key: a, Value: 1, Object: { a: 1, b: 2, c: 3 }
  // Key: b, Value: 2, Object: { a: 1, b: 2, c: 3 }
  // Key: c, Value: 3, Object: { a: 1, b: 2, c: 3 }
})();

// test with chai
/*
(function () {
  const { assert } = require('chai');

  // Test case: Array iteration
  const arr = [1, 2, 3, 4, 5];
  let iterationCount = 0;
  each(arr, () => {
    iterationCount++;
  });

  // Assert the number of iterations
  assert.equal(iterationCount, arr.length, 'Array iteration should iterate over each element');

  // Test case: Object iteration
  const obj = { a: 1, b: 2, c: 3 };
  let keyValuePairs = [];
  each(obj, (value, key) => {
    keyValuePairs.push(`${key}: ${value}`);
  });

  // Assert the key-value pairs
  assert.deepEqual(keyValuePairs, ['a: 1', 'b: 2', 'c: 3'], 'Object iteration should iterate over each key-value pair');

  // Test case: String iteration
  const str = 'Hello';
  let concatenatedString = '';
  each(str, (character) => {
    concatenatedString += character;
  });

  // Assert the concatenated string
  assert.equal(concatenatedString, str, 'String iteration should concatenate all characters');

  console.log('All assertions passed!');
})();
*/