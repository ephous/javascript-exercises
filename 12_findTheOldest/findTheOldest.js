/* 
Given an array of objects representing people with a birth 
and death year, return the oldest person.
*/

const findTheOldest = function(arr) {
    
    let oldestAge=-1;
    let oldestIdx=-1;
    arr.forEach( (x,currIdx) => {
        
        let xAge;
        if (x.hasOwnProperty('yearOfDeath')){
            xAge = x.yearOfDeath - x.yearOfBirth;
        } else {
            const rightNow = new Date(Date.now());
            xAge = rightNow.getFullYear() - x.yearOfBirth;
        }

        if (xAge > oldestAge){
            oldestAge = xAge;
            oldestIdx = currIdx;
        }
    });

    return arr[oldestIdx];
    
};

// Do not edit below this line
module.exports = findTheOldest;
