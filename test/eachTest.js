const each = require('../each');

// Custom iterator function
const iteratorFn = function(element, index, collection) {
  console.log(`Element: ${element}, Index: ${index}, Collection:`, collection);
};

// Custom context object
const contextObj = { message: 'Custom context object' };

// Array test
const array = [1, 2, 3, 4, 5];
console.log('Array Test:');
each(array, iteratorFn, contextObj);

// Object test
const object = { a: 1, b: 2, c: 3 };
console.log('Object Test:');
each(object, iteratorFn, contextObj);

// String test
const string = 'hello';
console.log('String Test:');
each(string, iteratorFn, contextObj);

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