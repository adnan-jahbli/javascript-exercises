const sumAll = function(a, b) {
    let sum = 0;

    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
        return "ERROR";
    }

    let counter = a > b ? b : a, condition = counter == a ? b : a;
    for (let i = counter; i <= condition; i++) sum += i;

    return sum;
};

// console.log(sumAll(1, 123));

// Do not edit below this line
module.exports = sumAll;
