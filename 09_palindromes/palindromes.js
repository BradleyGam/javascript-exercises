const palindromes = function (string) {
    let alphabeticString = string.split("").filter(char => /[a-zA-Z0-9]/.test(char)).join("").toLowerCase();
    let reverseString = alphabeticString.split("").reverse().join("").toLowerCase();
    return alphabeticString == reverseString;;
};

// Do not edit below this line
module.exports = palindromes;
