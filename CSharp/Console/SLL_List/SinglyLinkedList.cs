using System;
using System.Collections.Generic;

namespace SLL_List
{
    public class SinglyLinkedList
    {
        public SllNode Head;
        public SinglyLinkedList() 
        {
            Head = null;
        }
        // SLL methods go here. As a starter, we will show you how to add a node to the list.
        public void Add(int value) 
        {
            SllNode newNode = new SllNode(value);
            if(Head == null) 
            {
                Head = newNode;
            } 
            else
            {
                SllNode runner = Head;
                while(runner.Next != null) {
                    runner = runner.Next;
                }
                runner.Next = newNode;
            }
        }   

        public int Remove()
        {
            SllNode runner = Head;
            int NodeValue = 0;
            
            if(Head == null)
            {
                return NodeValue; 
            }
            
            if(runner.Next == null)
            {
                NodeValue = runner.Value;
                this.Head = null;
                return NodeValue;
            }
            else
            {
                while(runner.Next.Next != null)
                {
                    runner = runner.Next;
                }
                NodeValue = runner.Next.Value;
                runner.Next = null;
                return NodeValue;
            }
        }

        public void PrintValues()
        {
            if(Head != null)
            {
                SllNode runner = Head;
                while(runner != null)
                {
                    Console.WriteLine(runner.Value);
                    runner = runner.Next;
                }
            }
            else
            {
                Console.WriteLine("List is empty");
            }
        }

        public SllNode Find(int num)
        {
            SllNode runner = Head;

            while(runner != null)
            {
                if(runner.Value == num)
                {
                    Console.WriteLine($"Found a Node with Value of {runner.Value}");
                    return runner;
                }
                runner = runner.Next;
            }
            if(runner == null)
            {
                Console.WriteLine($"No Node with Value of {num}");
                return runner;                  
            }                 

            return runner;         
        }

        public void RemoveAt(int num)
        {
            SllNode runner = Head;

            if(num == 0)
            {
                Head = runner.Next;
                Console.WriteLine(Head.Value);
            }
            
            while(runner != null)
            {
                num -= 1;
                if(num == 0)
                {
                    runner.Next = runner.Next.Next;
                    Console.WriteLine(runner.Value);
                    Console.WriteLine(runner.Next.Value);
                    break;
                }
                else
                {
                    runner = runner.Next;
                }
            }

        }
    }
}