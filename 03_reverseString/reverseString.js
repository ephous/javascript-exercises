/* this works */
const reverseString_1 = function(inStr) {
    
    for(const x of inStr){
        arr.push(x);
    }
    
    let newStr = '';
    for (let i=arr.length-1;i>=0;i--){
        newStr = newStr + arr[i];
    }

    return newStr;

};

/* also works */
const reverseString = function(inStr) {
    let newStr = '';
    for(let i = inStr.length-1; i >= 0; i--) {
        newStr = newStr + inStr[i];
    }        
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
