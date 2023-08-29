class Ninja {
    constructor(name, health=90, speed=3, strength=3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name)
    }
    showStats() {
        console.log(`name: ${this.name}, health: ${this.health}, speed: ${this.speed}, strength: ${this.strength}`)
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, health=200, speed=10, strength=10, wisdom=10){
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const test = new Sensei('spongebob')

test.showStats()
test.speakWisdom()

