const sumAll = function(start, end) {
    let total = 0

    if (!(typeof start === "number") || !(typeof end === "number")) {
        return "ERROR"
    }

    if (start < 0 || end < 0) {
        return "ERROR"
    }

    if (end < start) {
        temp = start
        start = end
        end = temp 
    }

    for (i = start; i <= end; i++) {
        total += i
    }

    return total
};

// Do not edit below this line
module.exports = sumAll;
