const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1, 2, 3]), 1); // Expected: 1, Actual: 1 (First element is 1)
assertEqual(head(['a', 'b', 'c']), 'a'); // Expected: 'a', Actual: 'a' (First element is 'a')
assertEqual(head([]), undefined); // Expected: undefined, Actual: undefined (Empty array)
assertEqual(head([5]), 5); // Expected: 5, Actual: 5 (Single-element array)
assertEqual(head(['apple', 'banana', 'cherry']), 'apple'); // Expected: 'apple', Actual: 'apple' (First element is 'apple')
assertEqual(head([null, undefined, true]), null); // Expected: null, Actual: null (First element is null)
assertEqual(head([false, true]), false); // Expected: false, Actual: false (First element is false)
assertEqual(head(['hello', 'world']), 'hello'); // Expected: 'hello', Actual: 'hello' (First element is 'hello')
assertEqual(head([0, 1, 2]), 0); // Expected: 0, Actual: 0 (First element is 0)
assertEqual(head([NaN, Infinity]), NaN); // Expected: NaN, Actual: NaN (First element is NaN)