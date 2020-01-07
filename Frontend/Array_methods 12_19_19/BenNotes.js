const nums = [1, 2, 3, 4, 5];
// const letters = ['b', 'e', 'n'];
// const objs = [{id: 4}, {id: 2}, {id: 7}];


// nums.forEach(n => n * 2);

// Map method:
// Array.prototype.map = function(cb) {
//     const output = [];
//     this.forEach((item, i, arr) => {
//         output.push(cb(item, i, arr))
//     });
//     return output;
// };

// const output = nums.map(n => n * n);
// // const output = nums.map(n => 'hi');

// Filter method:
// Array.prototype.filter = function(cb) {
//     const output = [];
//     this.forEach(item => {
//         if (cb(item)) {
//             output.push(item);
//         }
//     });
//     return output
// };

// const output = nums.filter((n) => {
//     return n % 2 === 0;
// });

// const output = nums.reduce((memo, num) => {
//     console.log('memo >', memo);
//     console.log('num >', num);

//     return memo + num;
//     // return 'hi';
// }, 0);

// const output = letters.reduce((memo, num) => {
//         console.log('memo >', memo);
//         console.log('num >', num);

//         return memo + num;
//     }, 0);

// const output = objs.reduce((memo, obj) => {
// if (obj.id === 2) return true;

//     return memo + num;
//     // return 'hi';
// }, 0);

// console.log(letters);
// console.log(output);


const users = [{ age: 5 }, { age: 9 }, { age: 11 }];
// const ageTotal = users.reduce((ageTotal, user) => {
//   if (user.age === 11) return "hello world";
//   return ageTotal + user.age;
// }, 0);
// console.log(ageTotal); // hello world;

// const ageTotal = users.reduce((ageTotal, user) => {  
//     return ageTotal + user.age;
//   }, 0);
//   console.log(ageTotal); 

// Array.prototype.reduce = function (cb, startingValue) {
//     let i = 0;
//     let memo;
//     if (arguments.length > 1) {        
//         memo = startingValue;
//     } else {
//         i++;
//         memo = this[0];
//     }
//     for (; i < this.length; i++) {
//         memo = cb(memo, this[i])        
//     };
//     return memo;
// };

// const output = nums.reduce((memo, n) => memo + n);
// console.log(output);


const arr = [1, 2, 3];
const arr2 = arr;
arr2.push(4);
console.log(arr);
console.log(arr2);


