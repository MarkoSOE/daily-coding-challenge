// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.


//declare function boolToWord that takes in a boolean as an parameter
function boolToWord(bool){
    //condiitional if bool is true to return yes
    if(bool  === true){
        return "Yes"
    }
    //if bool is false then return no
    else{
        return "No"
    }
}


//alternative answer 

function boolToWordTwo(bool){
    //using a ternary is optimal when there's two possibilities (true or false). The expression to the left of the ':' is returned if the expression bool is evaluated to true, otherwise the expression on the right is returned.
    return bool ? 'Yes' : 'No'
}