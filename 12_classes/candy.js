class Candy {

 constructor(name, price) {
    this.name = name;
    this.price = price;
 } 

 getName () {
    return this.name;
 }

 getPrice () {
    return this.price;
 }
}

module.exports = Candy

/* in nodes write:
const Candy = require('./candy')
const candy = new Candy('MarsBars', '5.53');
candy.getName(); => will give me 'MarsBars'
candy.getPrice(); => will give me '5.53'
*/