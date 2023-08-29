class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}


class Unit extends Card {
    constructor(name, cost, power, resilience){
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }
    
    attack(target) {
        if(target instanceof Unit) {
            target.resilience -= this.power;
            console.log(`${this.name} strikes ${target.name} for ${this.power} points of damage`)
        }else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    playOn(target){
        if(!target instanceof Unit) {
            throw new Error( "Target must be a unit!" );
        }
        if( this.stat == 'power'){
            target.power += this.magnitude;
            console.log(`${this.name} is played on ${target.name}! It ${this.text} to ${target.power}!`)
        }
        else {
            target.resilience += this.magnitude;
            console.log(`${this.name} is played on ${target.name}! It ${this.text} to ${target.resilience}!`)
        }
        
    }
}

// Play out the following scenario
// turn	action
// 1	Make an instance of "Red Belt Ninja"
// 1	Make an instance of "Hard Algorithm" and play it on "Red Belt Ninja"
// 2	Make an instance "Black Belt Ninja"
// 2	Make an instance of "Unhandled Promise Rejection" and play it on "Red Belt Ninja"
// 3	Make an instance of "Pair Programming" and play it on "Red Belt Ninja"
// 3	"Red Belt Ninja" uses the attack method on "Black Belt Ninja"

const red_belt_ninja = new Unit('Red Belt Ninja', 3, 3, 4);
const hard_algorithm = new Effect('Hard Algorithm', 2, "Increases target's resilience by 3", 'resilience', 3);
const black_belt_ninja = new Unit('Black Belt Ninja', 4, 5, 4);
const unhandled_promise = new Effect('Unhandled Promise Rejection', 1, "Reduces target's resilience by 2", 'resilience', -2);
const pair_programming = new Effect('Pair Programming', 3, "Increases target's power by 2", 'power', 2);

hard_algorithm.playOn(red_belt_ninja);
unhandled_promise.playOn(red_belt_ninja);
pair_programming.playOn(red_belt_ninja);
red_belt_ninja.attack(black_belt_ninja);
