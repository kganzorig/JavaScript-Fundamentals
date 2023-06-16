//Debugging 

class ShoppingBasket {
    constructor() {
      this.discount = 0;
    }
  
    applyDiscount(discount) {
      
        this.discount = discount;
      //  discount = this.discount; Is wrong because it assigns the this.discount value to discount. 
    }
  
    getTotalPrice() {
      let totalPrice = 0;
      this.candies.forEach((candy) => {
        totalPrice += candy.getPrice();
      });
  
      return totalPrice - this.discount;
    }
  }