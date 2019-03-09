using System;

namespace deckOfCards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck NewDeck = new Deck();
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine(NewDeck.reset());
            Console.WriteLine(NewDeck.Cards.Count);
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine(NewDeck.shuffle2());
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine("---------------------------------------------------");
            Console.WriteLine(NewDeck.shuffle());
            Console.WriteLine(NewDeck.top_most());
            Console.WriteLine(NewDeck.top_most());
        }
    }
}
