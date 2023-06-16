const multiply = require('./multiply');

describe('multiply', () => {
    it('multiplies 5 by 2', () => {
        expect(multiply(5,2)).toBe(10);
    });

    it('multiplies 9 by 3', () => {
        expect(multiply(9,3)).toBe(27);
    });
});