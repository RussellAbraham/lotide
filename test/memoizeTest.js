const { expect } = require('chai');
const memoize = require('../memoize'); // Replace './memoize' with the correct path to the memoize function file

describe('memoize', () => {
  it('should memoize the result of a function', () => {
    let callCount = 0;
    const add = (a, b) => {
      callCount++;
      return a + b;
    };

    const memoizedAdd = memoize(add);

    expect(memoizedAdd(2, 3)).to.equal(5);
    expect(callCount).to.equal(1); // The function should be called once

    // Calling the memoized function with the same arguments should not invoke the original function
    expect(memoizedAdd(2, 3)).to.equal(5);
    expect(callCount).to.equal(1); // The function should still be called once

    // Calling the memoized function with different arguments should invoke the original function
    expect(memoizedAdd(4, 5)).to.equal(9);
    expect(callCount).to.equal(2); // The function should be called twice
  });

  it('should support custom address functions', () => {
    const person = {
      firstName: 'John',
      lastName: 'Doe',
      getFullName: function () {
        return this.firstName + ' ' + this.lastName;
      },
    };

    const getAddress = function () {
      return this.getFullName();
    };

    const memoizedGetAddress = memoize(getAddress, person);

    expect(memoizedGetAddress()).to.equal('John Doe');
    expect(memoizedGetAddress()).to.equal('John Doe'); // The result should be cached

    person.firstName = 'Jane'; // Modifying the object

    expect(memoizedGetAddress()).to.equal('John Doe'); // The cached result should still be returned
  });
});
