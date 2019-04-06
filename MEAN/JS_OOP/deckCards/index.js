class Card{
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
    show(){
        let stringVal;
        switch(this.value)
        {
            case(1):
                stringVal = "Ace";
                break;
            case(11):
                stringVal = "Jack";
                break;
            case(12):
                stringVal = "Queen";
                break;
            case(13):
                stringVal = "King";
                break;
            default:
                stringVal = this.value;
                break;
        }
        return `${stringVal} of ${this.suit}!`;
    }
}

class Deck{
    constructor(){
        this.reset();
        this.shuffle();
        this.displayDeck();
    }
    shuffle(){
        for(let i = this.deck.length-1; i > 0; i--){
            let swapIdx = Math.floor(Math.random() * i--);
            let temp = this.deck[i];
            this.deck[i] = this.deck[swapIdx];
            this.deck[swapIdx] = temp;
        }
    }
    reset(){
        this.deck = [];
        let suits = ["Clubs", "Spades", "Diamonds", "Hearts"];
  
        for(let i =0; i< suits.length; i++){
            for(let x=1; x<=13; x++){
                this.deck.push(new Card(suits[i], x));
            }
        }
        console.log(`there are ${this.deck.length} cards in the deck`);
        this.displayDeck();
        console.log('-'.repeat(50));
    }
    deal(){
        return this.deck.pop();
    }
    displayDeck(){
        for(let i = this.deck.length-1; i > 0; i--){
            this.deck[i].show();
        }
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    take(deck){
        this.hand.push(deck.deal());
    }
    discard(idx){
        if(idx < this.hand.length){
            this.hend.splice(idx, 1);
        }
    }
    displayHand(){
        console.log("=".repeat(50));
        console.log(`\tPlayer: ${this.name}'s hand:`);
        for(let i=0; i < this.hand.length; i++){
            console.log(`\t\t ${this.hand[i].show()}`);
        }
    }
}

class Game{
    constructor(){
        this.players = [];
        this.deck = new Deck();
    }
    addPlayer(name){
        this.players.push(new Player(name));
    }
    startGame(){
        for(let i = 0; i< this.players.length; i++){
            for(let x = 0; x<5; x++){
                this.players[i].take(this.deck);
            }
        }
    }
    showPlayersHand(){
        for(let i = 0; i < this.players.length; i++){
            this.players[i].displayHand();
        }
    }
}

const poker = new Game();
poker.addPlayer("Phil");
poker.addPlayer("James");
poker.addPlayer("Tommy");
poker.addPlayer("Ghost");
poker.addPlayer("Slyman");
poker.startGame();
poker.showPlayersHand();

