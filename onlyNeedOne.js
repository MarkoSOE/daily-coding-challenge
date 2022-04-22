// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

function check(a, x) {
    //looks for item x starting from index 0, returning true if found, flase if not  
    return a.includes(x,0);
}