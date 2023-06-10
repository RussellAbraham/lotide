const { assert } = require('chai');
const tail = require('../tail');

describe("#tail", () => {

  it("returns an empty array for an empty input array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['b', 'c'] for ['a', 'b', 'c']", () => {
    assert.deepEqual(tail(['a', 'b', 'c']), ['b', 'c']);
  });
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns ['hello', 'world'] for ['hi', 'hello', 'world']", () => {
    assert.deepEqual(tail(['hi', 'hello', 'world']), ['hello', 'world']);
  });
  it("does not modify the original array", () => {
    const input = [1, 2, 3];
    tail(input);
    assert.deepEqual(input, [1, 2, 3]);
  });
  it("returns an empty array for a single-element array", () => {
    assert.deepEqual(tail([5]), []);
  });
  it("returns an empty array for a two-element array", () => {
    assert.deepEqual(tail(['apple', 'banana']), []);
  });
  it("returns an empty array for an array with two or fewer elements", () => {
    assert.deepEqual(tail(['a']), []);
    assert.deepEqual(tail([]), []);
  });
});