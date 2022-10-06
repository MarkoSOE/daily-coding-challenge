// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
  
//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() { return this.name; }
}

function declareWinner(fighter1, fighter2, firstAttacker) {
    
    if(firstAttacker === fighter1.name){
        while(fighter1.health - fighter2.damagePerAttack > 0 || fighter2.health - fighter1.damagePerAttack > 0){
            fighter2.health -= fighter1.damagePerAttack
            console.log(`${firstAttacker} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health`)
            //fighter 2 attacks fighter 1
            fighter1.health -= fighter2.damagePerAttack
            console.log(`${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health`)
            if(fighter1.health - fighter2.damagePerAttack <= 0){
                fighter1.health -= fighter2.damagePerAttack
                console.log(`${fighter2.name} attacks ${fighter1.name}: ${fighter1.name} now has ${fighter1.health} and is dead. ${fighter2.name} wins`)
                return fighter2.name
            }
            else if(fighter2.health - fighter1.damagePerAttack <= 0){
                fighter2.health -= fighter1.damagePerAttack
                console.log(`${fighter1.name} attacks ${fighter2.name}: ${fighter2.name} now has ${fighter2.health} and is dead. ${fighter1.name} wins`)
                return fighter1.name
            }
        }
    }
  }

  

//couldnt finish the question; solution attached below: 
function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
      fighter2.health -= fighter1.damagePerAttack;
      fighter1.health -= fighter2.damagePerAttack;
    }
    
    if (fighter1.health <= 0 && fighter2.health <= 0)
      return firstAttacker;
    else if (fighter1.health <= 0)
      return fighter2.name;
    else
      return fighter1.name;
  }