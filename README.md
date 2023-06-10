# Lotide JavaScript Library

A collection of utility functions inspired by [Lodash](https://github.com/lodash/lodash) and [Underscore](https://github.com/jashkenas/underscore)

## Functions

### `findKey(object, callback)`

- Description: Searches for a key in an object based on the callback function's return value.
- Parameters:
  - `object` (Object): The object to search in.
  - `callback` (Function): The callback function that is called with each value in the object.
                           It should return a truthy value to find the corresponding key.
- Returns: The found key, or undefined if no key is found.

### `findKeyByValue(object, value)`

- Description: Finds the first key in the object whose value matches the given value.
- Parameters:
  - `object` (Object): The object to search.
  - `value` (*): The value to match.
- Returns: The key of the matched value, or `undefined` if no match is found.

### `flatten(array)`

- Description: Flattens a nested array into a single-level array.
- Parameters:
  - `array` (Array): The array to flatten.
- Returns: The flattened array.

### `head(array)`

- Description: Returns the first element of an array.
- Parameters:
  - `array` (Array): The array to query.
- Returns: The first element of the array, or `undefined` if the array is empty.

### `middle(array)`

- Description: Returns the middle element(s) of an array.
- Parameters:
  - `array` (Array): The array to query.
- Returns: The middle element(s) of the array. If the array has an odd length, returns a single-element array with the middle element. If the array has an even length, returns a two-element array with the two middle elements. If the array has two or fewer elements, returns an empty array.

### `assertEqual(actual, expected)`

- Description: Compares two values and logs a message indicating whether they are equal or not.
- Parameters:
  - `actual` (any): The actual value.
  - `expected` (any): The expected value.
- Returns: None.

### `assertArraysEqual(arr1, arr2)`

- Description: Compares two arrays and logs a message indicating whether they are equal or not.
- Parameters:
  - `arr1` (Array): The first array to compare.
  - `arr2` (Array): The second array to compare.
- Returns: None.

### `countLetters(string)`

- Description: Counts the occurrences of each letter in a string.
- Parameters:
  - `string` (string): The input string to count the letters.
- Returns: An object with letters as keys and their respective counts as values.

### `countOnly(allItems, itemsToCount)`

- Description: Counts the occurrences of specific items in an array based on a provided criteria.
- Parameters:
  - `allItems` (Array): The array of items to be counted.
  - `itemsToCount` (Object): The object specifying the items to count and their criteria.
- Returns: An object containing the counts of the specified items.

### `eqArrays(arr1, arr2)`

- Description: Compares two arrays for equality.
- Parameters:
  - `arr1` (Array): The first array to compare.
  - `arr2` (Array): The second array to compare.
- Returns: `true` if the arrays are equal, `false` otherwise.

### `eqObjects(object1, object2)`

- Description: Checks if two objects have identical keys with identical values.
- Parameters:
  - `object1` (Object): The first object to compare.
  - `object2` (Object): The second object to compare.
- Returns: Returns true if both objects have identical keys with identical values, otherwise false.

### `letterPositions(sentence)`

- Description: Returns an object that maps each letter in the input sentence to an array of its positions.
- Parameters:
  - `sentence` (string): The input sentence.
- Returns: An object with letter positions.

### `map(array, callback)`

- Description: Applies a callback function to each element in an array and returns an array of the results.
- Parameters:
  - `array` (Array): The input array.
  - `callback` (Function): The callback function to apply to each element.
- Returns: An array of the results after applying the callback function to each element.

### `tail(array)`

- Description: Returns a new array with all elements except the first.
- Parameters:
  - `array` (Array): The array to query.
- Returns: A new array containing all elements except the first, or an empty array if the input array has one or fewer elements.

### `takeUntil(array, callback)`

- Description: Creates a new array with elements from the original array until the callback returns a truthy value.
- Parameters:
  - `array` (Array): The original array.
  - `callback` (Function): The callback function that determines the stopping condition.
                           It should return a truthy value to stop iterating.
- Returns: A new array containing the elements until the stopping condition is met.

### `without(source, itemsToRemove)`

- Description: Creates a new array with all occurrences of specified items removed from the source array.
- Parameters:
  - `source` (Array): The source array.
  - `itemsToRemove` (Array): The items to remove from the source array.
- Returns: A new array with the specified items removed.

## Usage

- Make sure to have Node.js installed.
- Clone the repository and navigate to the project folder.
- Run `node filename.js` to execute the code and see the test results.
