using System;
using System.Collections.Generic;

namespace deckOfCards
{
    class Card
    {
        public string stringVal;
        public string cardSuit;
        public int val;

        public Card(string stringValue, string Suit, int Value)
        {
            stringVal = stringValue;
            cardSuit = Suit;
            val = Value;
        }
    }
    class Deck
    {
        // List<Card> cards = new List<Card> ();
        
        public List<Card> Cards;
        
        public Deck()
        {
            string suit = null;
            Cards = new List<Card>(52);
            {
                for (int i = 0; i < 4; i++)
                {  
                    if(i == 0)
                    {
                        suit = "Hearts";
                    }
                    else if(i == 1)
                    {
                        suit = "Diamonds";
                    }
                    else if(i == 2)
                    {
                        suit = "Spades";
                    }
                    else if(i == 3)
                    {
                        suit = "Clubs";
                    }
                        for(int j = 1; j<14; j++)
                        {
                            if(j == 1)
                            {
                                Card newCard = new Card("Ace",suit,j);
                                Cards.Add(newCard);
                            }
                            else if(j == 11)
                            {
                               Card newCard = new Card("Jack", suit, j);
                               Cards.Add(newCard);
                            }
                            else if (j == 12)
                            {
                                Card newCard = new Card("Queen", suit, j);
                                Cards.Add(newCard);
                            }
                            else if (j == 13)
                            {
                                Card newCard = new Card("King", suit, j);
                                Cards.Add(newCard);
                            }
                            else{
                                string numString = j.ToString();
                                Card newCard = new Card(numString, suit, j);
                                Cards.Add(newCard);
                            }
                        }
                }
            }
        }
        public Card top_most()
        {
            // int count = 0;
            Card draw = Cards[0];
            Cards.RemoveAt(0);
            // count++;
            Console.WriteLine(draw.stringVal +" "+ draw.cardSuit);
            Console.WriteLine($"CardsLeft: {Cards.Count}");
            return draw;
        }

        public Deck shuffle()
        {
            int val = this.Cards.Count;
            int i =0;
            Random firstCard = new Random();
            Random secondCard = new Random();
            while(i < val)
            {
                int firstIdx = firstCard.Next(0,val);
                int secondIdx = secondCard.Next(0,val);
                Card pullCard = this.Cards[firstIdx];
                this.Cards.Remove(pullCard);
                this.Cards.Insert(secondIdx, pullCard);
                i++;
            }
            return this;
           
        }
        public Deck shuffle2()
        {
            Random rand = new Random();
            for (int n = this.Cards.Count - 1; n > 0; --n)
            {
                int k = rand.Next(n+1);
                Card temp = this.Cards[n];
                this.Cards[n] = this.Cards[k];
                this.Cards[k] = temp;
            }
            return this;
        }
        public Deck reset()
        {
            Deck resetDeck = new Deck(); 
            this.Cards = resetDeck.Cards;
            Console.WriteLine("New Deck Made");
            return resetDeck;
        }


//     class Player
//     {
//         string name;
//         List<Card> hand = new List<Card>();

//         public Card Draw()
//         {

//         }
//         public Card Discard()
//         {
            
//         }

    }
}
