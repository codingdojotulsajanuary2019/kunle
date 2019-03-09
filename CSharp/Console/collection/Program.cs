using System;
using System.Collections.Generic;

namespace collection
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[] newArray = new int[] {0,1,2,3,4,5,6,7,8,9};
            bool[] array3 = new bool[10]; 
            string[] array2 = {"Tim", "Martin", "Nikki", "Sara"};


            List<string> flavors = new List<string>();
            flavors.Add ("Strawberry");
            flavors.Add ("Vanilla");
            flavors.Add ("Cookie Dough");
            flavors.Add ("Choc. Chip");
            flavors.Add ("Chocolate");

            Console.WriteLine(flavors.Count);
            Console.WriteLine(flavors[2]);
            flavors.RemoveAt(2);
            Console.WriteLine(flavors.Count);


            Dictionary <string,string> IceCream = new Dictionary <string,string>();
            IceCream.Add("Tim", null);
            IceCream.Add("Martin", null);
            IceCream.Add("Nikki", null);
            IceCream.Add("Sara", null);
            Console.WriteLine(IceCream["Martin"]);

            IceCream["Martin"] = "Chocolate";
            IceCream["Tim"] = "Choc. Chip";
            IceCream["Nikki"] = "Strawberry";
            IceCream["Sara"] = "Vanilla";
            Console.WriteLine(IceCream["Nikki"]);

            foreach (KeyValuePair<string,string> entry in IceCream)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
            
            
            // for (int x =0; x<= flavors.Count; x++)
            // {
            //     foreach (KeyValuePair<string,string> entry in IceCream)
            //     {
            //         entry.Value = flavors[x];
            //     }
            // }
        }
    }
}
