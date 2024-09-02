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
const reverseString_2 = function(inStr) {
    let newStr = '';
    for(let i = inStr.length-1; i >= 0; i--) {
        newStr = newStr + inStr[i];
    }        
    return newStr;
};

/* solution */
// did not realize we could use String functions for this exercise - doh!
const reverseString = function (string) {
    return string.split("").reverse().join("");
  };

// Do not edit below this line
module.exports = reverseString;
