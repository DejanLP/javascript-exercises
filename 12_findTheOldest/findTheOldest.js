const findTheOldest = function(people) {
    const currYear = new Date().getFullYear();

    people.map((person) => {
        if(!('yearOfDeath' in person)) {
            person['yearOfDeath'] = currYear;
        }
    })
    people.sort((prev, curr) => {
        const prevPerson = prev.yearOfDeath - prev.yearOfBirth;
        const currPerson = curr.yearOfDeath - curr.yearOfBirth;
        return currPerson > prevPerson ? 1 : -1;
    })
    return people[0];
}

// Do not edit below this line
module.exports = findTheOldest;
