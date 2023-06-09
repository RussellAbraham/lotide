const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements

assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"

assertEqual(result[1], "Labs");

// fails 

// Test 1: Empty array
assertEqual(tail([]), []);

// Test 2: Array with one element
assertEqual(tail([1]), []);

// Test 3: Array with multiple elements
assertEqual(tail([1, 2, 3]), [2, 3]);

// Test 4: Array with strings
assertEqual(tail(['apple', 'banana', 'cherry']), ['banana', 'cherry']);

// Test 5: Array with boolean values
assertEqual(tail([true, false, true]), [false, true]);

// Test 6: Array with mixed data types
assertEqual(tail([1, 'hello', true]), ['hello', true]);

// Test 7: Array with undefined values
assertEqual(tail([undefined, 2, 3]), [2, 3]);

// Test 8: Array with null values
assertEqual(tail([null, 'a', 'b']), ['a', 'b']);

// Test 9: Array with objects
assertEqual(tail([{ id: 1 }, { id: 2 }, { id: 3 }]), [{ id: 2 }, { id: 3 }]);

// Test 10: Array with nested arrays
assertEqual(tail([[1, 2], [3, 4], [5, 6]]), [[3, 4], [5, 6]]);

// passes

// Test 1: Empty array
assertEqual(JSON.stringify(tail([])), JSON.stringify([]));

// Test 2: Array with one element
assertEqual(JSON.stringify(tail([1])), JSON.stringify([]));

// Test 3: Array with multiple elements
assertEqual(JSON.stringify(tail([1, 2, 3])), JSON.stringify([2, 3]));

// Test 4: Array with strings
assertEqual(JSON.stringify(tail(['apple', 'banana', 'cherry'])), JSON.stringify(['banana', 'cherry']));

// Test 5: Array with boolean values
assertEqual(JSON.stringify(tail([true, false, true])), JSON.stringify([false, true]));

// Test 6: Array with mixed data types
assertEqual(JSON.stringify(tail([1, 'hello', true])), JSON.stringify(['hello', true]));

// Test 7: Array with undefined values
assertEqual(JSON.stringify(tail([undefined, 2, 3])), JSON.stringify([2, 3]));

// Test 8: Array with null values
assertEqual(JSON.stringify(tail([null, 'a', 'b'])), JSON.stringify(['a', 'b']));

// Test 9: Array with objects
assertEqual(JSON.stringify(tail([{ id: 1 }, { id: 2 }, { id: 3 }])), JSON.stringify([{ id: 2 }, { id: 3 }]));

// Test 10: Array with nested arrays
assertEqual(JSON.stringify(tail([[1, 2], [3, 4], [5, 6]])), JSON.stringify([[3, 4], [5, 6]]));

