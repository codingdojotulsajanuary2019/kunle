using System;
using System.Collections.Generic;

namespace hungryNinja
{
    class SweetTooth : Ninja
    {      
        public override bool isFull
        {
            get
            {
                if (calorieIntake >= 1500)
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

                if (item.IsSweet == true)
                {
                    calorieIntake += 10;
                }

                ConsumptionHistory.Add(item);

                item.GetInfo();
            }

            if (isFull == true)
            {
                Console.WriteLine("Ninja is full");
            }           
        }
    }
}