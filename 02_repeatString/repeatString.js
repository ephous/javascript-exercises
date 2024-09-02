const repeatString = function(theString, numRepeats) {
    
    if (numRepeats < 0){
        return 'ERROR';
    }

    let i = 0;
    let returnString = '';
    while( i < numRepeats) {
        returnString += theString;
        i++;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
