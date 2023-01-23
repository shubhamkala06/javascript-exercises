const reverseString = function(string) {
    let res = "";
    for (let index = string.length-1; index >= 0; index--){
        res += string[index];
    } 
    return res;
};

// Do not edit below this line
module.exports = reverseString;
