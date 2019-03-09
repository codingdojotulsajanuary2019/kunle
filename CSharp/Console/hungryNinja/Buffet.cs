using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Buffet
    {
        public List<IConsumable> Menu;   
        public Buffet()
        {
            Menu = new List<IConsumable>()
            {
                new Drink("V8 Veggie", 650, true, false),
                new Food("Tacos", 1000, true, false),
                new Food("Donuts", 700, false, true),
                new Food("Steak", 1200, false, false),
                new Food("Snickers", 150, false, true),
                new Drink("Espresso", 900, false, false),      
                new Food("Potato", 200, false, false),
                new Drink("Budlight", 900, false, true),
                new Food("Curry & Rice", 800, true, false),
                new Food("Fries", 400, false, false),
                new Drink("Getorade", 1100, false, true),
                new Drink("Jalepeno juice ", 700, true, false),
            };
        }
        public IConsumable Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(Menu.Count)];
        }
    }
}
