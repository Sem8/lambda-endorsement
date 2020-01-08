// exports.sum = function(...args) {
//   return args.reduce((accumulator, prev) => {
//     return accumulator + prev;
//   });
// };

// const sum = (...args) => {
//   return args;
// };
// console.log(sum(1, 2, 3));  // [1, 2, 3] - spread operator returns an array of parameters


/* Testing part II */
exports.asyncThing = (callback) => {
  return new Promise(resolve => {
    setTimeout(() => {
      callback();
      resolve(7);
    }, 1000)
  });
}