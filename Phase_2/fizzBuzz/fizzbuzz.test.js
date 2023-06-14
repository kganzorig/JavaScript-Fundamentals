const fizzBuzz = require('./fizzbuzz');

describe('fizzBuzz', () => {
    it ('returns "FizzBuzz" when the number is divisible by 3 and 5', () => {
        expect(fizzBuzz(45)).toBe('FizzBuzz');
    }); 
});

describe('fizzBuzz', () => {
    it ('returns "Fizz" when the number is divisible by 3', () => {
        expect(fizzBuzz(9)).toBe('Fizz');
    });
});

describe('fizzBuzz', () => {
    it ('returns "Buzz" when the number is divisible by 5', () => {
        expect(fizzBuzz(25)).toBe('Buzz');
    });
});

describe('fizzBuzz', () => {
    it ('returns the number when not divisible by 3 or 5', () => {
        expect(fizzBuzz(7)).toBe(7);
    });
});

