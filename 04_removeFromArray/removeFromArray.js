/* original attempt, which works great */
const removeFromArray_original = function(arr, ...removeThese) {
    for( let rt of removeThese){
      arr = arr.filter( x => x!==rt )
    }
    return arr;
  };

/* implementing something like the simpler solution */
const removeFromArray_solution = function(arr, ...removeThese) {
    newArr = [];
    arr.forEach( x => {
        if (!removeThese.includes(x)){
            newArr.push(x);
        }
    })
    return newArr;
  };

// either one works..
const removeFromArray = removeFromArray_original;
//const removeFromArray = removeFromArray_solution;

// Do not edit below this line
module.exports = removeFromArray;
