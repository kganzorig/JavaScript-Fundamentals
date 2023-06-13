const lowercaseMessage = (message) =>  {
    return message.toLowerCase();
}

const transform = (message, transformFunction) => {
    return transformFunction(message);
}

transform("WHY ARE YOU SHOUTING?", lowercaseMessage);

module.exports = lowercaseMessage;


/*
Or I could've done, to print the lowercased message when running node lowercase.js:

const result = transform("WHY ARE YOU SHOUTING?", lowercaseMessage);

consol.log(result);
*/
