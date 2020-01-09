const fizzBuzz = require('./index');

describe('FizzBuzz function', () => {
    it('returns fizz when called with 3', () => {
        // AAA
        // arrange
        const input = 3;        

        // action
        const output = fizzBuzz(input);

        // assert
        expect(output).toBe('fizz');
    });

    it('return buzz with called with 5', () => {
        expect(fizzBuzz(5)).toBe('buzz');
    })
})