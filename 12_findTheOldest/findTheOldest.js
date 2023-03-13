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


//--------------------Alternat Solution-----------------------------

//const findTheOldest = function(array) {
//    return array.reduce((oldest, currentPerson) => {
//      const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//      const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
//      return oldestAge < currentAge ? currentPerson : oldest;
//    })
//  };
//  
//  const getAge = function(birth, death) {
//    if (!death) {
//      death = new Date().getFullYear();
//    }
//    return death - birth;
//  };

// Do not edit below this line
module.exports = findTheOldest;
