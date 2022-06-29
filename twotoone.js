// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmn opqrstuvwxyz"

function longest(s1,s2){
    //using ES6 Set object to create an array with no duplicates
    let combinedarr = Array.from(new Set(s1.split('')))
    s2.split('').forEach(element => {
        if(!combinedarr.includes(element)){
            combinedarr.push(element)
        }
    })
    return combinedarr.sort().join('')
}