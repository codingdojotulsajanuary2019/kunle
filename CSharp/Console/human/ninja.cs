using System;

namespace human
{
     class Ninja : Human
    {
        public Ninja(string name) : base(name)
        {
             Dexterity = 175;
        }

        public override int Attack(Human target)
        {
            int damage = target.Dexterity * 5;

            Random chance = new Random();
            int num = chance.Next(0,6);
            Console.WriteLine(num);
            if (num == 2)
            {
                 damage += 10;
            }

            target.Health -= damage;
            Health += damage;
            Console.WriteLine($"{Name} got {damage} times healthier by attacking {target.Name}");
            Console.WriteLine(target.Health);
            Console.WriteLine(Health);

            return Health;
        }

        public void Steal(Human target)
        {
            int Stolen = 5;
            target.Health -= Stolen;
            this.Health += 5;

            Console.WriteLine(target.Health);
            Console.WriteLine(Health);
        }
    }
}