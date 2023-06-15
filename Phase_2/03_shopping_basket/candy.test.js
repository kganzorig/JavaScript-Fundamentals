const candy = require('./candy');


const candyDouble = {
    getName: () => 'Mars',
    getPrice: () => 4.99
};

describe('candy', () => {
    it('should return the name of the candy and price', () => {
        expect(candyDouble.getName()).toEqual('Mars'),
        expect(candyDouble.getPrice()).toEqual(4.99)
    });

    it('should return the price of the candy', () => {
        expect(candyDouble.getPrice()).toEqual(4.99)
    });

    it('should return the name of the candy', () => {
        expect(candyDouble.getName()).toEqual('Mars')
    });

});




