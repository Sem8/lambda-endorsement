function sayHi() {
    console.log('hi!');
}

// 1st example:
// module.exports = sayHi;


// 2nd example:
module.exports = {
    sayHi,
    someEnvVariable: 'fjkdl;ajfkd',
}