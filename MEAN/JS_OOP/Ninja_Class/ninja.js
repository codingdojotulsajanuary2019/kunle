function Ninja(name){
    this.name = name;
    this.health = 100;

    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log(`The ninja name is ${this.name}`);
    };

    this.showStats = function(){
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${speed}, Strength: ${strength}`);
    }

    this.drinkSake = function(){
        this.health += 10;
        console.log(this.health);
    }

    this.punch = function(target){
        if(target instanceof Ninja == true){
            lose = 5;
            target.health -= lose;
            console.log(`${target.name} was punched by ${this.name} and lost ${lose} Health!`);
            console.log(target.health);
        }
        else
        {
            console.log(`${target} is not a ninja`);
        }
    }

    this.kick = function(target){
        if(target instanceof Ninja == true){
            let energy = strength * 15;
            target.health -= energy;
            console.log(`${target.name} was kicked by ${this.name} and lost ${energy} Health!`);
        }
        else
        {
            console.log(`${target} is not a ninja`);
        }
    }
}

let ninja1 = new Ninja("James");
let ninja2 = new Ninja("Robert");
ninja2.punch("John");
ninja1.kick(ninja2);
