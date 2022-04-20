// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 

function setAlarm(employed, vacation){
    //if emploed is true and vacation is false then return true, else return false.
    return employed && !vacation ? true : false;
}


// OR we can do return employed && !vacation and that would do the same thing