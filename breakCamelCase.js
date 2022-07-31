// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    return string.match(/[A-Z][a-z]+/g).
}

console.log(solution('camelCasing'))
console.log(solution('camelCasingTest'))