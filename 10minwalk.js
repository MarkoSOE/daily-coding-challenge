// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {
    //insert brilliant code here
    //if the walk is not 10 minutes long, return false
    if(walk.length !== 10){
        return false
    }
    //if the walk is 10 minutes long, check to see if it returns you to the starting point
    // keep track of the amount of times we go in any direction
    let north = 0
    let south = 0
    let east = 0
    let west = 0
    //iterate through the array
    for(let i = 0; i < walk.length; i ++){
        if(walk[i] === 'n'){
            north ++
        }
        else if(walk[i] === 's'){
            south ++
        }
        else if(walk[i] === 'e'){
            east ++
        }
        else if(walk[i] === 'w'){
            west ++
        }
    }
    if(north === south && east === west){
        return true
    }else{
        return false
    }
  }