const assertObjectsEqual = require('../assertObjectsEqual');

const johnSmith = { name : 'John Smith', age : 123, limbs : ['left arm', 'right arm', 'left leg', 'right leg'] };

assertObjectsEqual(johnSmith, johnSmith); // pass
assertObjectsEqual(johnSmith, this); // fail