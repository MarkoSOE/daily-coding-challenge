// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//declare a function reverseString that takes in a parameter called 'str'
function reverseString(str){
    //split the string into an array passing in an empty delimiter, resulting in each letter being split into a separate array. The we use the array reverse method that reverses the order of elements in the array. Finally, we join the array into a string using an empty delimiter.
    return str.split('').reverse().join('');
}

//call the function passing in a word

console.log(reverseString('world'));