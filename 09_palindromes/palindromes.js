const palindromes = function (word) {
    let left = 0
    let right = word.length - 1

    while (left <= right) {
        while (!isAlphanumeric(word[left])) {
            left++
        }

        while (!isAlphanumeric(word[right])) {
            right--
        }

        if (word[left].toLowerCase() !== word[right].toLowerCase()) {
            return false
        } 

        left ++ 
        right--
    }

    return true
};

function isAlphanumeric(char) {
    return /^[a-zA-Z0-9]$/.test(char);
  }

// Do not edit below this line
module.exports = palindromes;
