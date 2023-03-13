const reverseString = function(string) {
    let res = "";
    for (let index = string.length-1; index >= 0; index--){
        res += string[index];
    } 
    return res;
};

//-----------Alternate solution---------

//const reverseString = function(string) {
// return string.split('').reverse().join('');
//};


// Do not edit below this line
module.exports = reverseString;
