/* series of numbers in which each number ( Fibonacci number ) 
is the sum of the two preceding numbers.

Here, Fibonacci sequence used is 1, 1, 2, 3, 5, 8
*/

const fibonacci = function(fnum) {
    if (fnum < 0) {return "OOPS";}
    if (fnum==0) {return 0;}
    if (fnum < 3) {return 1;}

    let iter = 2; // start at two b/c fnum < 3 handled above
    const pairs = [1,1];
    let currval = 0;
    while (iter++ < fnum){
        currval = pairs[0] + pairs[1];
        pairs[0] = pairs[1];
        pairs[1] = currval;
    }
    
    return currval;
};


// Do not edit below this line
module.exports = fibonacci;
