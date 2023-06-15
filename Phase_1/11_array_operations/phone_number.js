const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd'
];



const checkLength = (phoneNumber) => {
    if (phoneNumber.length <=10) {
        return true;
    }
   else {
    return false;
   }
};

const filterLongNumbers = numbers.filter(checkLength);

console.log(filterLongNumbers);