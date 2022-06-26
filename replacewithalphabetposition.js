// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )


function alphabetPosition(text) {
    //set up array of letters
    let letterArr = ('abcdefghijklmnopqrstuvwxyz').split('')
    //split text into arr 
    return text.toLowerCase().split('').map((element) =>{
        // return the position of the letter in letterArr + 1
        return letterArr.findIndex(letter => letter == element) + 1
    }).filter( item => item > 0).join(' ') //if the result is zero that means the element in text is not found in the alphabet and we can filter it out
}


