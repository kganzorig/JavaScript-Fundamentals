const searchCandies = require('./searchCandies.js');

describe('searchCandies', () => {
    it('return candies starting with "Ma" and price less than 10', () => {
        expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
    });
});

describe('searchCandies', () => {
    it('return candies starting with "Ma" and price less than 2', () => {
        expect(searchCandies('Ma', 2)).toEqual(['Mars']);
    });
});

describe('searchCandies', () => {
    it('return candies starting with "S" and price less than 10', () => {
        expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });
});

describe('searchCandies', () => {
    it('return candies starting with "S" and price less than 4', () => {
        expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
    });
});

