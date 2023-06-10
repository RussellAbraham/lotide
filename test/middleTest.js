const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an empty array for an empty input array", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns an empty array for an array with one element", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns the middle element for an array with odd length", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
    assert.deepEqual(middle(['a', 'b', 'c', 'd', 'e']), ['c']);
    assert.deepEqual(middle([true, false, null, undefined]), [null]);
  });

  it("returns the two middle elements for an array with even length", () => {
    assert.deepEqual(middle([1, 2]), [1, 2]);
    assert.deepEqual(middle(['a', 'b', 'c', 'd']), ['b', 'c']);
    assert.deepEqual(middle([true, false, null, undefined, 0, '']), [null, undefined]);
  });

  it("does not modify the original array", () => {
    const input = [1, 2, 3];
    middle(input);
    assert.deepEqual(input, [1, 2, 3]);
  });

  it("returns a new array with the middle element(s)", () => {
    const input = [1, 2, 3, 4];
    const result = middle(input);
    assert.deepEqual(result, [2, 3]);
    assert.notStrictEqual(result, input);
  });
});