using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class Program
    {
        static void Main(string[] args)
        {
            Buffet Today = new Buffet();
            Console.WriteLine("_____________________");
            Ninja ninja1 = new SweetTooth();
            Console.WriteLine("_____________________");
            Ninja ninja2 = new SpiceHound();
            Console.WriteLine("_____________________");

            while(ninja1.isFull == false)
            {
                IConsumable meal1 = Today.Serve();
                meal1.GetInfo();               
                ninja1.Consume(meal1);
            }
            while(ninja2.isFull == false)
            {
                IConsumable meal2 = Today.Serve();
                ninja2.Consume(meal2);
            }
            Console.WriteLine("_____________________");

            int count1 = ninja1.ConsumptionHistory.Count;
            Console.WriteLine(count1);

            int count2 = ninja2.ConsumptionHistory.Count;
             Console.WriteLine(count2);

            if(count1 > count2)
            {
                Console.WriteLine($"{ninja1} ninja consumed {count1} items");
            }
            if(count2 > count1)
            {
                Console.WriteLine($"{ninja2} ninja consumed {count2} items");
            }
            if(count2 == count1)
            {
                Console.WriteLine($"Both {ninja1} ninja and {ninja2} ninja consumed {count1} items");
            }

        }
    }
}
