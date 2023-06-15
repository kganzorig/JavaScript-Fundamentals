const ShoppingBasket = require('./shoppingBasket');
const candy = require('./candy');


const marsDouble = {
    getPrice: () => 4.99
};
const skittlesDouble = {
    getPrice: () => 3.99
}

describe('shoppingBasket', () => {
    let basket;

    beforeEach(() => {
        basket = new ShoppingBasket();
    });

    it('returns an empty basket', () => {
    expect(basket.getTotalPrice()).toEqual(0);
    });

    it('adds an candy to the basket', () => {
        basket.addItem(marsDouble);
        expect(basket.getTotalPrice()).toEqual(4.99);
    });
        
    it('works out sum of all the times in basket', () => {
        basket.addItem(marsDouble);
        basket.addItem(skittlesDouble);
        basket.addItem(skittlesDouble);
        expect(basket.getTotalPrice()).toEqual(12.97);
    });
});

/*
You will now test-drive and implement the two classes Candy and ShoppingBasket so the following code works:
> const basket = new ShoppingBasket();
> basket.getTotalPrice();
0

> basket.addItem(candy);

> basket.getTotalPrice();
4.99

> basket.addItem(new Candy('Skittle', 3.99));
> basket.addItem(new Candy('Skittle', 3.99));

> basket.getTotalPrice();
12.97
*/