using System;

namespace human
{
    public class Human
    {
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health;
        public int Health
        {
            get 
            { 
                return this.health; 
            }
            set 
            {
                this.health = value;
            }
        }

        public Human(string name)
        {
            Name = name;
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }
        
        public Human(string name, int strent, int intel, int dext, int h_health)
        {
            Name = name;
            Strength = strent;
            Intelligence = intel;
            Dexterity = dext;
            health = h_health;
        }
        public virtual int Attack(Human target)
        {      
            target.Health = target.Health - this.Strength*5;
            return target.health;
        }      
    }
}
