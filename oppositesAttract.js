// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.


function lovefunc(flower1, flower2){
    return ((flower1%2==0 && flower2%2!==0) || (flower1%2!==0 && flower2%2==0))? true : false
}


//better alternative: 

// If the remainder of flower1 or flower2 is 0 then it is even. if they're not equal to each other then the return function is evaluated to true and returns true. This would be the case if they are opposites of each other (one is even, the other is odd). 

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2 
}