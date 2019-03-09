using System;
using System.Collections.Generic;

namespace boxing
{
    class Program
    {
        static void Main(string[] args)
        {
            List <object>Boxing = new List<object>();
            Boxing.Add (7);
            Boxing.Add (28);
            Boxing.Add (-1);
            Boxing.Add (true);
            Boxing.Add ("chair");

            int Total = 0;
            foreach (var box in Boxing)
            {
                Console.WriteLine(box);
                if(box is int)
                {
                    Total += (int)box;
                }
            }
            Console.WriteLine("Hello World!");
            Console.WriteLine(Total);            
        }
    }
}
