const getTheTitles = function(data) {
    const result = [];
    for (let i = 0; i< data.length; i++) {
        result.push(data[i].title);
    }
    return result;
};

// Do not edit below this line
module.exports = getTheTitles;
