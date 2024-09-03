/* palindrome is string that spelled the same both forwards 
and backwards, usually w/o considering punctuation or word breaks

*/

const palindromes = function (inStr) {
    
    original_string_condensed = inStr.split(/\W/g).join('').toLowerCase();

    // split into array of w+ords, in reverse order
    let newArr = []
    for(x of inStr.split(/\W/g).reverse() ){
        newArr.push( x.split('').reverse().join('') )
    }
    
    new_string_condensed = newArr.join('').toLowerCase();
    
    //console.log(original_string_condensed);
    //console.log(new_string_condensed)
    
    return original_string_condensed===new_string_condensed;


};

/*
tests = ["A car, a man, a maraca.", 
         "Rats live on no evil star.",
         "Lid off a daffodil.",
         "Animal loots foliated detail of stool lamina.",
         "A nut for a jar of tuna." ];
for( const x of tests){
    console.log( palindromes(x) );
}
*/

// Do not edit below this line
module.exports = palindromes;
