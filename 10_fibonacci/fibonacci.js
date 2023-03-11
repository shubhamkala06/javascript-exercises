const fibonacci = function(n) {
    n = +n;
    if(n<1){
        return "OOPS";
    }
    let n1 = 1,n2 = 1;
    if(n == 1||n == 2){
       return 1;
    }
    else{
        for(let i=0;i<(n-2);i++){
            let temp = n2;
            n2 = n1 + n2;
            n1 = temp;
        }
        return n2;
    }
};

// Do not edit below this line
module.exports = fibonacci;
