# Lotide JavaScript Library

A collection of utility functions inspired by [Lodash](https://github.com/lodash/lodash) and [Underscore](https://github.com/jashkenas/underscore)

## Functions

### `head(array)`

- Description: Returns the first element of an array.
- Parameters:
  - `array` (Array): The array to query.
- Returns: The first element of the array, or `undefined` if the array is empty.

### `tail(array)`

- Description: Returns a new array with all elements except the first.
- Parameters:
  - `array` (Array): The array to query.
- Returns: A new array containing all elements except the first, or an empty array if the input array has one or fewer elements.

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

### `eqArrays(arr1, arr2)`

- Description: Compares two arrays for equality.
- Parameters:
  - `arr1` (Array): The first array to compare.
  - `arr2` (Array): The second array to compare.
- Returns: `true` if the arrays are equal, `false` otherwise.

## Usage

- Make sure to have Node.js installed.
- Clone the repository and navigate to the project folder.
- Run `node filename.js` to execute the code and see the test results.