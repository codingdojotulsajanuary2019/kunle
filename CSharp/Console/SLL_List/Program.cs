using System;

namespace SLL_List
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            SinglyLinkedList first = new SinglyLinkedList();
            first.Add(5);
            first.Add(3);
            first.Add(8);
            first.Add(2);
            first.Add(9);
            first.Add(58);

            Console.WriteLine(first.Remove());
            first.PrintValues();
        }
    }
}
