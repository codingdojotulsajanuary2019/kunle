var Christopher = {
    character: "Christopher Robin",
    greet: function(){
        console.log("Are you ready to explore?")
    }
};
var Pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Oh bother")
    }
};
var Piglet = {character: "Piglet",
    greet: function(){
        console.log("Oh d-d-d-d-dear! I wasn't expecting company!")
    }
};
var Owl = {character: "Owl",
    greet: function(){
        console.log("Good morning neighbor")
    }
};
var Rabbit = {character: "Rabbit",
    greet: function(){
        console.log("Did you come with your night visions")
    }
};
var Bees = {character: "Bees",
    greet: function(){
        console.log("You know its nothing but sweets here")
    }
};
var Gopher = {character: "Gopher",
    greet: function(){
        console.log("Oorp Oorrp")
    }
};
var Tigger = {character: "Tigger",
    greet: function(){
        console.log("The wonderful Tiggers are wonderful")
    }
};
var Kanga = {character: "Kanga",
    greet: function(){
        console.log("Lets go on the mountain top")
    }
};
var Eeyore = {character: "Eeyore",
    greet: function(){
        console.log("Please tell me what i am")
    }
};
var Heffalumps = {character: "Heffalumps",
    greet: function(){
        console.log("Oh Noooo")
    }
};

Christopher.East = Rabbit;
Christopher.North = Kanga;
Christopher.South = Pooh;
Christopher.West = Owl;

Pooh.East = Bees;
Pooh.West = Piglet;
Pooh.North = Christopher;
Pooh.South = Tigger;

Piglet.North = Owl;
Piglet.East = Pooh;

Owl.East = Christopher;

Rabbit.East = Gopher;
Rabbit.South = Bees;
Rabbit.West = Christopher;

Bees.North = Rabbit;
Bees.West = Pooh;

Gopher.West = Rabbit;

Tigger.North = Pooh;

Kanga.North = Eeyore;
Kanga.South = Christopher;

Eeyore.East = Heffalumps;
Eeyore.South = Kanga;

Heffalumps.West = Eeyore;

var player = {
    location: Pooh,
    honey: false 
}

function move(str){

    if(player.location[str]){
        player.location = player.location[str];
        name = player.location.character;
        console.log("You are now at ",name,"'s house");

        player.location.greet();
    }
    else{
        console.log("You may not go there");
    }
}

function pickUp(){
    if(player.location == Bees){
        player.honey = true;
        console.log("You've gathered some honey!");
        mission();
    }
    else{
        console.log("there is no honey at this location");
    }
}

function mission(){
    allvar = [Eeyore, Heffalumps, Kanga, Owl, Christopher, Rabbit, Gopher, Piglet, Pooh, Tigger];

    num = Math.floor(Math.random() * Math.floor(allvar.length));
    console.log(num);
    delivery = allvar[num];

    console.log(`${delivery.character} is in desperate need of Honey`);
}

function drop(){

    if(player.honey == false){
        console.log("Did you forget to pick up some honey?");
        break;
    }

    else if(player.location != delivery){
        console.log("Whoops! This isn't the place that needs the honey!");
    }
    if(player.location == delivery){
        console.log(`Congratulations! You delivered the honey to ${delivery.character}`);
        player.honey = false;
    }
}