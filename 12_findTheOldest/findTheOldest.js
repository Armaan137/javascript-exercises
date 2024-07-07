const findTheOldest = function(arr) {
    return arr.reduce((oldest, curr) => {
        let ageOne = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        let ageTwo = getAge(curr.yearOfBirth, curr.yearOfDeath)

        return ageTwo >= ageOne ? curr : oldest
    })
};

function getAge(birth, death) {
    const today = new Date().getFullYear()

    if (!death) {
        return today - birth
    }

    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
