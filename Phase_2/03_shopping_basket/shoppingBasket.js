class ShoppingBasket {
    constructor(basket) {
        this.basket = [];
    }

    addItem(candy) {
        this.basket.push(candy);
    }

    getTotalPrice() {
        return this.basket.reduce((acc, candy) => acc + candy.getPrice(), 0);
    }
}

    module.exports = ShoppingBasket;