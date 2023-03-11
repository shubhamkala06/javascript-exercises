const reverse = require('../03_reverseString/reverseString.js');
const palindromes = function (string) {
    string=string.toLowerCase();
    string = string.trim();
    let arr = string.split('');
    arr = arr.filter((item)=>{if(item<='z'&&item>='a'){
        return item;
    }})
    string = arr.toString().replaceAll(',','');
    if(string == reverse(string)){
        return true;
    }
    else{
        return false;
    }
};
//ZZZZ car, a man, a maracaz.
// Do not edit below this line
module.exports = palindromes;
