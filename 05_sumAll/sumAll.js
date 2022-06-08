const sumAll = function(start, end) {
    
    //Check for negative or non-number parameters
    if ((start < 0 || end < 0) || (!Number.isInteger(start) || !Number.isInteger(end))) {
        return 'ERROR';
    }

    let sum = 0;
    //Swaps parameters if first one is greater than second
    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }
    //Sums up all numbers between range of parameters
    for (let i = start; i<= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
