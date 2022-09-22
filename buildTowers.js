// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

function towerBuilder(nFloors) {
    let arr = []
    let base = nFloors*2-1
    let hashes = 1
    for(let i = 0; i < nFloors; i++){
        let difference = (base - hashes)/2 
        let spaces = ' '.repeat(difference)
        let stars = '*'.repeat(hashes)

        arr.push(spaces + stars + spaces)

        hashes += 2 
    }
    return arr
}