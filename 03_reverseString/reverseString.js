const reverseString = function(str) {

    // alternative solution:
    // return str.split('').reverse().join('');

    let reversedStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
