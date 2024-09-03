const leapYears = function(year) {

    /*
    Leap years are years divisible by four (like 1984 and 2004) 
    However, years divisible by 100 are not leap years (such as 1800 and 1900)
    unless they are divisible by 400 (like 1600 and 2000, which were in fact 
    leap years)
    */

    const divBy4 = 0 == year % 4;
    const divBy100 = 0 == year % 100;
    const divBy400 = 0 == year % 400;

    if (!divBy4) return false;
    if (divBy400) return true;
    if (divBy100) return false;
    return true; 

};

/*
console.log( '1984', leapYears(1984) ); //expect true
console.log( '2004', leapYears(2004) ); //expect true
console.log( '2000', leapYears(2000) ); //expect true
console.log( '1800', leapYears(1800) ); //expect false
console.log( '1973', leapYears(1973) ); //expect false
*/

// Do not edit below this line
module.exports = leapYears;
