using System;

namespace human
{
      class Samurai : Human
    {
        public Samurai(string name) : base(name)
        {
            Health = 200;
        }

        public override int Attack(Human target)
        {
            if (target.Health < 50)
            {
                target.Health = 0;
                Console.WriteLine($"Samurai {Name} left {target.Name} to bleed to death");
                return Health;
            }
            else
            {
                base.Attack(target);
                Console.WriteLine($"Samurai {Name} attacked {target.Name}");
                return Health;
            }           
        }

        public int Meditate(Samurai target)
        {
            target.Health = 200;
            Console.WriteLine($"Samurai {target.Name} health is been restored");

            return target.Health;
        }
    }
}