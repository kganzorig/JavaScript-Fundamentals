class UserBase {

    constructor(users) {
        this.users = users;
    }

    count() {
        return this.users.length;
    }

    getNames() {
        return this.users.map(user => user.getName());
    }

    getIntroductions() {
        return this.users.map(user => user.getIntroduction());
    }
 }


module.exports = UserBase;

/*
const User = require('./user');
const UserBase = require('./userBase');

const users = [
  new User('Khuslen'),
  new User('James'),
];

const userBase = new UserBase(users);
console.log(userBase.count());
console.log(userBase.getNames()); 
console.log(userBase.getIntroductions()); 
*/