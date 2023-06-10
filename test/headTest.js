const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 5 for [5,6,7]", () => {
    assert.strictEqual(head([5,6,7]), 5);
  });
  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 'a' for ['a', 'b', 'c']", () => {
    assert.strictEqual(head(['a', 'b', 'c']), 'a');
  });
  it("returns undefined for an empty array", () => {
    assert.strictEqual(head([]), undefined);
  });
  it("returns 5 for [5]", () => {
    assert.strictEqual(head([5]), 5);
  });
  it("returns 'apple' for ['apple', 'banana', 'cherry']", () => {
    assert.strictEqual(head(['apple', 'banana', 'cherry']), 'apple');
  });
  it("returns null for [null, undefined, true]", () => {
    assert.strictEqual(head([null, undefined, true]), null);
  });
  it("returns false for [false, true]", () => {
    assert.strictEqual(head([false, true]), false);
  });
  it("returns 'hello' for ['hello', 'world']", () => {
    assert.strictEqual(head(['hello', 'world']), 'hello');
  });
  it("returns 0 for [0, 1, 2]", () => {
    assert.strictEqual(head([0, 1, 2]), 0);
  });
  it("returns NaN for [NaN, Infinity]", () => {
    assert.strictEqual(head([NaN, Infinity]), NaN);
  });
});