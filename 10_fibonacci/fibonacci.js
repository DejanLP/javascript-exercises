const fibonacci = function(a) {
    let number = parseInt(a);
    if(number < 1) {
        return "OOPS";
    }
    if (number === 1 || number === 2) {
        return 1;
    }
    return fibonacci(a-1) + fibonacci(a-2);

};

// Do not edit below this line
module.exports = fibonacci;
