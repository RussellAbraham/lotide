const memoize = function(callback, address) {
  const cache = new Map();
  address = address || (x => x);

  return function (...args) {
    const key = address(...args);

    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = callback.apply(this, args);
    cache.set(key, result);

    return result;
  };
};

module.exports = memoize;
