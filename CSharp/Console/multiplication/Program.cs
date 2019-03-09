using System;
using System.Collections.Generic;

namespace multiplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[,] table = new int[10,10];

            for (int idx=1; idx <= 10; idx++)
            {
                for (int x=1; x<=10; x++)
                { 
                    table[idx-1,x-1]= idx * x;
                    if (x == 10)
                    {
                        Console.WriteLine(table[idx-1,x-1] + ", " +"]");
                        Console.Write("[" + " ");
                    }
                    else
                    {                   
                        Console.Write(table[idx-1,x-1] + ", ");
                    }
                }
            }  
        }
    }
}
