class Card {
    constructor(id, card){
        this.id = id;
        this.name = card[0];
        this.type = card[1];
        this.image = card[2];
    }

    show(){
        return `${this.id} - ${this.name} - ${this.type}!`;
    }
}

class Deck {
    constructor(){
        this.reset();
        this.shuffle();
    }

    shuffle(){
        for(let i = this.deck.length-1; i >= 0; i--){
            let swapIdx = Math.floor(Math.random() * i--);
            let temp = this.deck[i];
            this.deck[i] = this.deck[swapIdx];
            this.deck[swapIdx] = temp;
        }
        console.log("Card was shuffled");
        return this.deck;
    }

    reset(){
        this.deck = [];
        let cards = [
            ["Tacocats", "Cat", "a"],
            ["SKIP", "Action", "b"],
            ["Hairy Potato Cat", "Cat", "b"],
            ["Shuffle", "Action", "b"],
            ["Beard Cat", "Cat", "b"],
            ["Favor", "Action", "b"],
            ["Cattermelon", "Cat", "b"],
            ["Attack", "Action", "s"],
            ["Rainbow-Ralphing Cat", "Cat", "b"],
            ["Reverse", "Action", "s"],
            ["See the Future", "Action", "s"]
        ];

        for(let i =0; i < cards.length; i++){
            if( cards[i][1] == "Action" ){
                for(let x = 1; x <=4; x++){
                    this.deck.push(new Card(i*x+i, cards[i]));
                }
            }
            if( cards[i][1] == "Cat" ){
                for(let x = 1; x <=5; x++){
                    this.deck.push(new Card(i*x+i, cards[i]));
                }
            }
        }
        console.log(`there are ${this.deck.length} cards in the deck`);
    }

    deal(){
        return this.deck.pop();
    }

    addDiffuse(){

    }
    createBomb(players){
        console.log(`there are ${this.deck.length} cards in the deck`);
        let cards = [
            ["Explode", "Action", "b"],
            ["Diffuse", "Action", "a"]
        ]

        for(let i =0; i < cards.length; i++){
            if( cards[i][0] == "Diffuse" ){
                for(let x = 1; x <= 2; x++){
                    this.deck.push(new Card(i*x+i, cards[i]));
                }
                for(let j =0; j < players.length; j++){
                    players[j].displayHand();
                }
            }
            if( cards[i][0] == "Explode" ){
                for(let x = 1; x < players.length; x++){
                    this.deck.push(new Card(i*x+i, cards[i]));
                }
            }
        }
        console.log(`there are ${this.deck.length} cards in the deck`);
        this.shuffle();
        console.log("-".repeat(30));
        console.log(`there are ${this.deck.length} cards in the deck`);

    }
}

class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }

    take(deck){
        this.hand.push(deck.deal());
    }

    discard(idx){
        if(idx < this.hand.length){
            this.hand.splice(idx, 1);
        }
    }
    displayHand(){
        for(let i = 0; i < this.hand.length; i++){
            console.log(`\t ${this.hand[i].show()}`)
        }
        console.log(this.hand.length);
    }
}

class Game {
    constructor(){
        this.players = [];
        this.deck = new Deck();
        // this.Deck2 = new Deck();
        // this.deck.shuffle();
    }

    addPlayer(name){
        this.players.push(new Player(name));
    }

    startGame(){
        for(let i =0; i < this.players.length; i++){
            for(let x = 0; x < 6; x++){
                this.players[i].take(this.deck);
            }
            this.players[i].hand.push(new Card(500, ["Diffuse", "Action", "z"]))
        }
        this.deck.createBomb(this.players);
    }
}

Game1 = new Game();
Game1.addPlayer("John");
Game1.addPlayer("Mike");
Game1.addPlayer("Carol");
Game1.addPlayer("Sarah");
Game1.startGame();
