const sumAll = function(n1, n2) {
    if((typeof n1 != typeof 1) || (typeof n2 != typeof 1) || (n1*n2 < 0))
    {
        return "ERROR";
    }

    let sum = 0;
    let init = 0, limit = 0;
    if(n1<n2){
        init = n1;
        limit = n2;
    }
    else{
        init = n2;
        limit = n1;
    }
    for(;init<=limit;init++)
    {
        sum += init;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
