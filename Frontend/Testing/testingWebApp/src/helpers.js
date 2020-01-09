const uuid = require("uuid");

exports.sum = function(...args) {
  return args.reduce((accumulator, prev) => {
    return accumulator + prev;
  });
};

// const sum = (...args) => {
//   return args;
// };
// console.log(sum(1, 2, 3));  // [1, 2, 3] - spread operator returns an array of parameters

/* Testing part II - testing Async code */
// exports.asyncThing = (callback) => {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       callback();
//       resolve(7);
//     }, 1000)
//   });
// }

/* Testing  part III - testing with mocks and spies*/
exports.makePerson = (firstName, lastName) => {
  return {
    id: uuid(),
    fullName: `${firstName} ${lastName}`
  };
};

exports.executeIfEven = function(number, callback) {
  if (number % 2 === 0) {
    callback(number);
  }
};
