using System;
namespace Phone
{
    public class Galaxy : Phone, IRingable 
    {
        public Galaxy(string versionNumber, int batteryPercentage, string carrier, string ringTone) 
            : base(versionNumber, batteryPercentage, carrier, ringTone) {}
        public string Ring() 
        {
            return $"...{Ringtone}...";
        }
        public string Unlock() 
        {
            return $"Galaxy {model} unlocked with fingerprint scanner";
        }
        public override void DisplayInfo() 
        {
            Console.WriteLine("###################");
            Console.WriteLine($"Galaxy {version}");   
            Console.WriteLine($"Battery Percentage: {percentage}");   
            Console.WriteLine($"Carrier: {service}");   
            Console.WriteLine($"Ring Tone: {Ringtone}"); 
            Console.WriteLine("###################"); 
        }
    }
}