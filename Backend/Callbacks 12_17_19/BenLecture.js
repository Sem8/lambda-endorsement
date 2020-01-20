// stack trace: order of all the functions open at the time the app crashed
function foo() {
  // declaration
}

const bar = function() {
  // expression (b/c there's an equal sign)
}
foo()
bar()

// const x = 5;
// const y = () => {};
// const foos = [() => {console.log('hi');}, function() {}, function foo() {}, y];
// const obj = {
//   y,
// };
// obj.method2 = foos[0];
// obj.method2();

const letters = ["a", "b", "c"];

// letters.forEach((letter)  => {
//     console.log(letter);
// });

/* Resetting our own forEach method to return each element in array */
Array.prototype.forEach = function(cb) {
  // console.log(this);
  for (let i = 0; i < this.length; i++) {
    // console.log(this[i]);
    cb(this[i], i, this);
  }
};
// letters.forEach(console.log);

// letters.forEach();
// letters.forEach((letter)  => {
//     console.log(letter);
// });

/* Resetting our own map method to return each element in array */
Array.prototype.map = function(cb) {
    // console.log(this);
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(cb(this[i]));    
    }
    // console.log(arr);
    return arr;
  };
letters.map(console.log);

// Array.prototype.filter = function(cb) {
//     // console.log(this);
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//       arr.push(cb(this[i]));      
//     //   cb(this[i], i, this);
//     }
//     // console.log(arr);
//     return arr;
//   };
// letters.map(console.log);

/* Ben notes */
const userJSONStrs = ["{\"age\":22}", "{\"age\":32}", "{\"age\":14}"];
const users = userJSONStrs.map(JSON.parse);
const filteredUsers = users.filter((user) => { return user.age >= 18; });
const averageAge = filteredUsers.reduce((memo, user) => {
  return memo + user.age;
}, 0) / filteredUsers.length;
console.log(averageAge);

/* Ben notes */
const userJSONStrs = ["{\"age\":22}", "{\"age\":32}", "{\"age\":14}"];
const averageAge = userJSONStrs
  .map(JSON.parse)
  .filter((user) => { return user.age >= 18; })
  .reduce((memo, user) => {
  return memo + user.age;
}, 0) / 2;
console.log(averageAge);

/* Ben notes */
const nums = [1, 2, 3, 4, 5];
Array.prototype.forEach = function(cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
nums.forEach(function(item, index, arr) {
  console.log(item, index, arr);
});
