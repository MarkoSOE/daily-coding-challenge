// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6


function sumArray(array) {
    //first it checks if the provided array is empty or a null value, if so, return 0
    //if it's not, then sort the array, remove the first and last number, and reduce to a single number
    return (array == null || array == false) ? 0 : array.sort((a,b) => a - b).slice(1, -1).reduce((acc,el) => acc + el, 0)
  }

console.log(sumArray([ ]));
console.log(sumArray(null));
console.log(sumArray([ 6, 2, 1, 8, 10 ]));