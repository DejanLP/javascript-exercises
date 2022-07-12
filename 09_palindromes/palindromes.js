const palindromes = function (input) {
    const formatted = input.replace(/[^\w\s]/gi, '').replace(/ /g,'').toLowerCase();;
    for (let i = 0; i <= formatted.length / 2; i++) {
        if(formatted.charAt(i) !== formatted.charAt(formatted.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
