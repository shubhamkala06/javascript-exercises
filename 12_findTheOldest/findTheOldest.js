const findTheOldest = function(arr) {
    let max_Age = 0;
    let presentYear = new Date();
    presentYear=presentYear.getFullYear();
    let obj = {};
    for(const i of arr){
        if(i.yearOfDeath == undefined){
            let age = presentYear - i.yearOfBirth;
            if(age>max_Age){
                max_Age = age;
                obj = i;
            }
        }
        else{
            let age = i.yearOfDeath - i.yearOfBirth;
            if(age>max_Age){
                max_Age = age;
                obj = i;
            }
        }
    }
    return obj;
};

// Do not edit below this line
module.exports = findTheOldest;
