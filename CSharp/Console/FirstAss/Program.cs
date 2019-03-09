using System;

namespace FirstAss
{
    class Program
    {
        static void Main(string[] args)
        {
            int start = 1;
            int end = 255;
            for (int i = start; i<= end; i++)
            {
                Console.WriteLine(i);
            }
            for(int i = 1; i< 101; i++)
            {
                if( i%3 == 0 || i%5 == 0 )
                {
                    if(! (i%3 == 0 && i%5 ==0) )
                    {
                        Console.WriteLine(i);
                    }
                }
            }
            for (int i = 1; i<101; i++)
            {
                if( i%3 == 0 && i%5 ==0 )
                {
                    Console.WriteLine("FizzBuzz");
                }                
                else if ( i%3 == 0)
                {
                    Console.WriteLine("Fizz");
                }
                if ( i%5 == 0)
                {
                    Console.WriteLine("Buzz");
                }
            }
            int value = 1;
            while (value < 101)
            {
                if( value%3 == 0 && value%5 ==0 )
                {
                    Console.WriteLine("FizzBuzz");
                }                
                else if ( value%3 == 0)
                {
                    Console.WriteLine("Fizz");
                }
                if ( value%5 == 0)
                {
                    Console.WriteLine("Buzz");
                }
                value++;
            }
        }
    }
}
