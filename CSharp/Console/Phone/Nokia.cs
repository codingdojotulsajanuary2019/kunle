using System;
namespace Phone
{
    public class Nokia : Phone, IRingable 
    {
        public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
            : base(versionNumber, batteryPercentage, carrier, ringTone) {}
        public string Ring() 
        {
            return $"...{Ringtone}...";
        }
        public string Unlock() 
        {
            return $"Nokia {model} unlocked with passcode";
        }
        public override void DisplayInfo() 
        {
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$");
            Console.WriteLine($"Nokia {version}");   
            Console.WriteLine($"Battery Percentage: {percentage}");   
            Console.WriteLine($"Carrier: {service}");   
            Console.WriteLine($"Ring Tone: {Ringtone}");  
            Console.WriteLine("$$$$$$$$$$$$$$$$$$$"); 
        }
    }
}