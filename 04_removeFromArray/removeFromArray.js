const removeFromArray = function(array, ...element) {
    return array.filter((item) => !element.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
