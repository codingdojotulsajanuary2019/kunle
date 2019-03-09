using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class SpiceHound : Ninja
    {
        public override bool isFull
        {
            get
            {
                if (calorieIntake >= 1200)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        public override void Consume(IConsumable item)
        {
            if (isFull == false)
            {
                calorieIntake += item.Calories;

                if (item.IsSpicy == true)
                {
                    calorieIntake -= 5;
                }
                ConsumptionHistory.Add(item);
                item.GetInfo();
            }
            if (isFull == true)
            {
                Console.WriteLine("Ninja is full and cannot eat more");                          
            }
        }
    }
}