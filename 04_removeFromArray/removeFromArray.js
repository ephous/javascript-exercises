const removeFromArray = function(arr, ...removeThese) {
    for( let rt of removeThese){
      arr = arr.filter( x => x!==rt )
    }
    return arr;
  };

// Do not edit below this line
module.exports = removeFromArray;
