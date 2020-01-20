// function outer() {
//     return function() {
//         console.log('hi');
//     };
// };

// const inner = outer;
// const inner2 = outer();

// console.log(inner2);  // [Function]
// inner2();  // 'hi'

// function outer(message) {
//     const newMessage = message + '!';
//     return function() {
//         console.log(newMessage);
//     };
// };

// const inner = outer('hi');
// const inner3 = outer('sup');
// const inner2 = outer('hey');

// inner(); // hi!
// inner2();  // 'hey!'
// inner3();  // 'sup!'

// function counter(n = 0) {
//     return function() {
//         return ++n;
//     };
// }

// const count = counter(100);

// count();
// count();
// count();
// console.log(count());  // 104

/* HOMEWORK: Mutate original input or state */ 
// counter = (n = 0) => {
//     return {
//         'increment': () => {
//             n += 1;
//             console.log(n);
//             return n;
//         },
//         'decrement': () => {
//             n -= 1;
//             console.log(n);
//             return n;
//         }
//     };
// }
// const countObj = counter(50);
// countObj.increment();  // 51
// countObj.increment();  // 52
// countObj.decrement();  // 51



/* Don't mutate original state */
// counter = (n = 0) => {
//     let newN;
//     return {
//         'increment': () => {
//             newN = n + 1;
//             // console.log('n: ', n);
//             // console.log(newN);
//             return newN;
//         },
//         'decrement': () => {
//             newN = n - 1;
//             // console.log('n: ', n);
//             // console.log(newN);
//             return newN;
//         }
//     };
// }
// const countObj = counter(50);
// // console.log(countObj.increment());  // 51
// // console.log(countObj.increment());  // 51
// // console.log(countObj.decrement());  // 49

// countObj.increment();  // 51
// countObj.increment();  // 51
// countObj.decrement();  // 49