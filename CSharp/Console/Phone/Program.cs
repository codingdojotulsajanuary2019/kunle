using System;

namespace Phone
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            Nokia eleven = new Nokia("1100", 60, "Metro PCS", "Ringgg ring ringgg");
            Galaxy s8 = new Galaxy("s8", 100, "T-Mobile", "Dooo do doo dooo");

            eleven.DisplayInfo();
            Console.WriteLine(" ");

            Console.WriteLine(eleven.Ring());
            Console.WriteLine(eleven.Unlock());
            Console.WriteLine(" ");

            s8.DisplayInfo();
            Console.WriteLine(" "); 
                 
            Console.WriteLine(s8.Ring());
            Console.WriteLine(s8.Unlock());
        }
    }
}
