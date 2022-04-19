// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){   
    //converting hours, minutes, and seconds to milliseconds and adding them up
    return (s*1000) + (m * 60000) + (h * 3600000)
}