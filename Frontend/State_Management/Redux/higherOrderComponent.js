/* Callback functions */

// Ex 1:
// const add = (x, callback) => {
//     // function callback(x, num) {
//     //     return x+num;
//     // }
//     return callback(x);
// };
// const addByFive = (num) => {
//     return num + 5;
// };

// console.log(add(10, addByFive));  // 15
// console.log(add(10, addByFive(20))); // TypeError

// Ex 2:
// const add = (x, callback) => {
//   //    return function callback() {
//   //         return x + 5;
//   //     }();
//   function callback() {
//     return x + 5;
//   }
//   // return callback();
// };
// const addByFive = num => {
//   return num + 5;
// };
// console.log(add(10, addByFive)); // 15


// Ex 3:
// const add = innerFunc => {
//     return innerFunc;
// };
// const addFive = num => {
//     return num + 5;
// };
// console.log(add(addFive(5)));  // 10

// Ex 4: Higher order function
const multiply = num1 => {
    return (num2) => {
        return num1 * num2;        
    };    
};
// console.log(multiply(5)(10));  // 50

const tripler = aNum => {
    return 3;
}

const doubler = multiply(2);
// console.log(doubler(4));  // 8
// console.log(multiply(2)(doubler(4))); // 16
// console.log(multiply(null)(4));  // 0
// console.log(multiply(2)(doubler)); // NaN
// console.log(multiply(2)(tripler()));  // 6


