class SmallestIntegerFinder {
    findSmallestInt(args) {
      
      //define a smallest variable and assign it the first integer of the array
      let smallest = args[0];

      //iterate through each element of the array and if the element is less than the value of the smallest variable, set the smallest variable to be that element
      args.forEach(item => item < smallest ? smallest = item: smallest = smallest);

      return smallest;
    }
  }


//   Alternative solution:

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }