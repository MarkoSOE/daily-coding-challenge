// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.
function countBy(x,n){
    // initialize array
    let z =[];
    //setting counter to go from 1 to, and including, the parameter - n provided 
    for (let i = 1; i <= n;i++){
        // add the product of the counter and the mutiple parameter - x provided
        z.push(x * i);
    }
    //return the array
    return z;
}