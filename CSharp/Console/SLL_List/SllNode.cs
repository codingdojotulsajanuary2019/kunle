using System;

namespace SLL_List
{
    public class SllNode
    {
        public int Value;
        public SllNode Next;
        public SllNode(int value) 
        {
            Value = value;
            Next = null;
        }
    }
}