using System;

namespace human
{
    class Wizard : Human
    {
        public Wizard(string name) : base(name)
        {
            Health = 50;
            Intelligence = 25;
        }

        public override int Attack(Human target)
        {
            int damage = target.Intelligence * 5;
            target.Health -= damage;
            Health += damage;
            Console.WriteLine($"Wizard {Name} got {damage} times healthier by attacking {target.Name}");
            Console.WriteLine(target.Health);
            Console.WriteLine(Health);

            return Health;
        }

        public int Heal(Human target)
        {
            int Healing = target.Intelligence * 10;
            target.Health += Healing;
            Console.WriteLine($"{target.Name} has been healed with {Healing} power");
            return Health;
        }

    }
}
