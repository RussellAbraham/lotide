const assertEqual = require('../assertEqual');

// Test cases
assertEqual(2 + 2, 4); // Passes, as 2 + 2 = 4
assertEqual("hello", "hello"); // Passes, as both strings are equal
assertEqual(10, 5); // Throws an error, as 10 !== 5
assertEqual(true, false); // Throws an error, as true !== false
assertEqual("Lighthouse Labs", "Bootcamp");// fail
assertEqual(1, 1); // pass
assertEqual(10, 10); // Passes, as 10 is equal to 10
assertEqual("hello", "Hello"); // Throws an error, as "hello" !== "Hello" (case-sensitive)
assertEqual([1, 2, 3], [1, 2, 3]); // Throws an error, as [1, 2, 3] !== [1, 2, 3] (arrays are reference types)
assertEqual({ name: "John", age: 25 }, { name: "John", age: 25 }); // Throws an error, as objects are reference types
assertEqual(null, null); // Passes, as null is equal to null
assertEqual(undefined, undefined); // Passes, as undefined is equal to undefined
assertEqual(5, "5"); // Throws an error, as 5 !== "5" (different types)
assertEqual(NaN,NaN);
// Custom objects
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Alice", 30);
const person3 = new Person("Bob", 25);

assertEqual(person1, person2); // Throws an error, as person1 !== person2 (objects are reference types)
assertEqual(person1, person3); // Throws an error, as person1 !== person3 (objects are reference types)
