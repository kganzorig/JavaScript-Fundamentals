const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (name) => {
    return `Hello ${name}! 50% off our best candies for you today!`;
};

const personalised = names.map(generateMessages);

console.log(personalised);