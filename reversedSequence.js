// Build a function that returns an array of integers from n to 1 where n>0.\

const reverseSeq = n => {
    //initialize array
    let arr = [];
    //loop number of times sepcified by parameter
    for (let i = 0; i < n; i ++){
        //append to the end of the array n-i
        arr.push(n-i);
    }
    //return the array
    return arr;
  };



  //alternative 

  const reverseSeqTwo = n => {
    return Array(n).fill(0).map((_,index) => n-index);
  }