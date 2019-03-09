using System;

namespace human
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Kunle like(s) McDonald's");
            Human bill = new Human("Bill", 5, 5, 5, 150);
            Human joe = new Human("Joe");
            Wizard Harry = new Wizard("Harry");
            Ninja Choi = new Ninja("Choi");
            Samurai Jim = new Samurai("Jim");
            Samurai Alex = new Samurai("Alex");
            bill.Attack(Jim);
            Harry.Attack(Jim);
            Alex.Meditate(Jim);
            Choi.Steal(Jim);
        }
    }
}
