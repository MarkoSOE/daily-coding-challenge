// here was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
    // using reduce method to find the sum based on an array. 
    let average = (classPoints.reduce((acc,element) => acc+=element))/classPoints.length
    return yourPoints > average ? true : false
  }
  