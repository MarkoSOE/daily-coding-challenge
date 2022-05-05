// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

function getSum(a,b)
{
    if (a < b || a==b){
        let arr = [];
        for (a; a <= b; a++){
            arr.push(a);
        }
        return arr.reduce((acc,element) => acc += element,0);
    }
    else if (b < a){
        let arr = [];
        for (b; b <= a; b++){
            arr.push(b);
        }
        return arr.reduce((acc,element) => acc += element,0);
    }
}