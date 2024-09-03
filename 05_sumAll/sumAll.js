const sumAll_original = function(a, b) {
    
    //----------------------------------
    // ensure Number, per requirement
    if (typeof a != 'number'){
        return('ERROR');
    }
    if (typeof b != 'number'){
        return('ERROR');
    }

    //----------------------------------
    // ensure positive, per requirement
    if ((a < 0) || (b < 0)){
        return('ERROR');
    }

    //----------------------------------
    // ensure integers, per requirement
    if (a != Math.trunc(a)){
        return('ERROR');
    }
    if (b != Math.trunc(b)){
        return('ERROR');
    }

    //----------------------------------
    let summ = 0;
    let [starts,stops] = (b > a) ? [a,b] : [b,a]
    for(let i=starts;i<=stops;i++){
        summ+=i;
    }

    return summ;

};

const sumAll_solution = function(a, b) {
    
    //----------------------------------
    // ensure integer, per requirement
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return 'ERROR';
    }

    //----------------------------------
    // ensure positive, per requirement
    if ((a < 0) || (b < 0)){
        return 'ERROR';
    }

    //----------------------------------
    let summ = 0;
    let [starts,stops] = (b > a) ? [a,b] : [b,a]
    for(let i=starts;i<=stops;i++){
        summ+=i;
    }

    return summ;

};

// either one works, but solution uses one fewer conditional
//const sumAll = sumAll_original;
const sumAll = sumAll_solution;

// Do not edit below this line
module.exports = sumAll;
