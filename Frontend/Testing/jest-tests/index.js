const fizzBuzz = num => {
    let output = '';
    // return 'bazz'; // accidental mistakes in code can be caught
    if (num % 3 === 0) {
        output += 'fizz';
    }
    if (num % 5 === 0) {
        output += 'buzz';
    }
    return output;
}

module.exports = fizzBuzz;