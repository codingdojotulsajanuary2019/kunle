using System;
using System.Collections.Generic;

namespace practice
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            string[] myCars = {"Mazda", "Ford Model", "Nissan", "Honda"};
            Console.WriteLine("-" + myCars[2]);
            List<string> bikes = new List<string>();
            bikes.Add("Kawasaki");
            bikes.Add("Suzuki");
            bikes.Add("BMW");
            bikes.Insert(2, "Yamaha");
            foreach (string manu in bikes)
            {
                Console.WriteLine("-" + manu);
            }
            

        }
    }
}
