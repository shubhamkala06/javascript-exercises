const removeFromArray = function(array, ...rm) {
    let result = array.filter((item)=>{
        if(!(rm.includes(item)))
        {
            return item;
        }
    })
    return result;
};

// Rest parameters, Array.filter(), Array.includes()

// Do not edit below this line
module.exports = removeFromArray;