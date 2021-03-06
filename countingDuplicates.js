// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
    //...
    
    //set a counter for the amount of times a duplicate occurs
    
    // want to split the string into an array
    
    // for each element, take the element and see if it occurs again in the array, if it does then add 1 to the dupcounter 
    let dupecounter = 0;
    text.split('').forEach((element) => {
      for (let i = 0; i < text.length; i++){
        if (element === text[i]){
          dupecounter += 1;
        }
      }
    })
    return dupecounter;
  }

  console.log(duplicateCount('abcde'))