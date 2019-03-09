using System;
using System.Collections.Generic;

namespace Basic_13
{
    class Basic13
    {
        public static void PrintNumbers()
        {
            for(int x =1; x<= 255; x++)
            {
                Console.WriteLine(x);
            }
        }

        public static void PrintOdds()
        {
            for(int x =1; x<= 255; x++)
            {
                if(x%2 == 1){
                    Console.WriteLine(x);
                }
            }
        }

        public static void PrintSum()
        {
            int Sum = 0;
            for(int x =0; x<= 255; x++)
            {
                Sum += x;
                Console.WriteLine($"New number: {x} Sum: {Sum}");
            }
        }

        public static void LoopArray(int[] numbers)
        {
            for(int i =0; i<numbers.Length; i++)
            {
                Console.WriteLine(numbers[i]);
            }
        }

        public static int FindMax(int[] numbers)
        {
            int Max = numbers[0];
            for(int i =1; i<numbers.Length; i++)
            {
                if(numbers[i] > Max)
                {
                    Max = numbers[i];
                }
            }
            return Max;
        }

        public static void GetAverage(int[] numbers)
        {
            int Sum = 0;
            for(int i =1; i<numbers.Length; i++)
            {
                Sum += numbers[i];
            }
            float avg = Sum / numbers.Length;
            Console.WriteLine(avg);
        }

        public static int[] OddArray()
        {
            int[]Oddarray = new int [128];
            int x = 0;
            while(x < 128)
            {
                 for(int i = 0; i< 256; i++)
                {
                    if(i%2 == 1)
                    {
                        Oddarray[x] = i;
                        x++;
                    }
                }
            }    
            return Oddarray;
        }

        public static int GreaterThanY(int[] numbers, int y)
        {
            int Count = 0;
            for(int x = 0; x< numbers.Length; x++)
            {
                if(numbers[x] > y)
                {
                    Count++;
                }
            }
            return Count;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            for(int x = 0; x< numbers.Length; x++)
            {
                numbers[x] = numbers[x] * numbers[x];
                Console.WriteLine(numbers[x]);
            }
        }

        public static void EliminateNegatives(int[] numbers)
        {
            for(int x = 0; x< numbers.Length; x++)
            {
                if(numbers[x] < 0)
                {
                    numbers[x] = 0;
                }
                Console.WriteLine(numbers[x]);
            }
        }

        public static void MinMaxAverage(int[] numbers)
        {
            int min = numbers[0];
            int max = numbers[0];
            int average = 0;

            for(int x = 1; x< numbers.Length; x++)
            {
                if(numbers[x] > max)
                {
                    max = numbers[x];
                }
                if(numbers[x] < min)
                {
                    min = numbers[x];
                }
                average += numbers[x];
            }
            average = average / numbers.Length;
            Console.WriteLine($"Min: {min}, Max: {max}, Average: {average}");
        }

        public static void ShiftValues(int[] numbers)
        {
            for(int i =0; i < numbers.Length; i++)
            {
                if(i == numbers.Length -1)
                {
                    numbers[i] = 0;
                }
                else
                {
                    numbers[i] = numbers[i+1];
                }
                Console.WriteLine(numbers[i]);
            }
        }

        public static object[] NumToString(int[] numbers)
        {
            object [] numtostring = new object[numbers.Length];
            string Dojo = "dojo";
            for(int i =0; i < numbers.Length; i++)
            {
                if(numbers[i] < 0)
                {                  
                   numtostring[i] = Dojo;
                }
                else
                {
                    numtostring[i] = numbers[i];
                }
            }
            return numtostring;
        }
    }   
}