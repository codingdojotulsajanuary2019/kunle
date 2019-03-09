using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Puzzles
    {
        public int[] RandomArray()
        {
            Random num = new Random();
            int [] RandomArray = new int[10];
            int max = 0;
            int min = 0;
            int sum = 0;

            for(int i = 0; i < 10; i++)
            {
                RandomArray[i] = num.Next(5,25);
                if(RandomArray[i] > max)
                {
                    max = RandomArray[i];
                }
                if(RandomArray[i] < min)
                {
                    min = RandomArray[i];
                }
                sum += RandomArray[i];
            }

            Console.WriteLine($"Min: {min}, Max: {max}, Sum: {sum}");
            return RandomArray;
        }

        public static string TossCoin()
        {
            Console.WriteLine("Tossing a Coin!");
            string result = "";
            Random side = new Random();

           int Coin = side.Next(2);
           if(Coin == 0)
           {
                result = "Heads";
                Console.WriteLine(result);
           }
           else
           {
                result = "Tails";
                Console.WriteLine(result);
           }
           return result;
        }

        public static Double TossMultipleCoins(int num)
        {
            int x = 1;
            int HeadCount = 0;
            int TailCount = 0;

            while(x < num+1)
            {
                Console.WriteLine($"Tossing Coin - {x}");
                string result = TossCoin();
                if (result == "Heads")
                {
                    HeadCount += 1;
                }
                if (result == "Tails")
                {
                    TailCount += 1;
                }
                
                x++;
            }
            if(HeadCount > TailCount)
            {
                return (num/HeadCount);
            }
            else
            {
                return (num/TailCount);
            }
        }

        public static List<string> Names()
        {
            List<string>Names = new List<string>();
            List<string> Output = new List<string>();
            Names.Add("Todd");
            Names.Add("Tiffany");
            Names.Add("Charlie");
            Names.Add("Geneva");
            Names.Add("Sydney");

            string Temp = "";
            Random shuffle = new Random();
            for(int i = 0; i < Names.Count; i++)
            {
                int Swap = shuffle.Next(4);
                Temp = Names[i];
                Names[i] = Names[Swap];
                Names[Swap] = Temp;
            }

            foreach(var name in Names)
            {
                Console.WriteLine(name);
                if(name.Length > 5)
                {
                    Output.Add(name);
                }
            }
            return Output;
        }
    }
}