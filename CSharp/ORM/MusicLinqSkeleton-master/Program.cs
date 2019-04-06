using System;
using System.Collections.Generic;
using System.Linq;
using JsonData;

namespace ConsoleApplication
{
    public class Program
    {
        public static void Main(string[] args)
        {
            //Collections to work with
            List<Artist> Artists = MusicStore.GetData().AllArtists;
            List<Group> Groups = MusicStore.GetData().AllGroups;

            //========================================================
            //Solve all of the prompts below using various LINQ queries
            //========================================================

            //There is only one artist in this collection from Mount Vernon, what is their name and age?
            string disGuy = Artists.Where(art => art.Hometown =="Mount Vernon").Select(art => art.ArtistName).ToString();
            string disGuyAge = Artists.Where(art => art.Hometown =="Mount Vernon").Select(art => art.Age).ToString();
            Console.WriteLine(disGuy + "--- have this please appear ---" + disGuyAge);
            //DONE

            
            //Who is the youngest artist in our collection of artists?
            Artist Youngest = Artists.OrderByDescending(artist => artist.Age).Last();
            System.Console.WriteLine("$$$$$$$$$$$$$$$$-Youngest-$$$$$$$$$$$$$$");
            System.Console.WriteLine(Youngest.ArtistName);
            System.Console.WriteLine("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
            // DONE

            
            // Console.WriteLine(Artists.Where(artist => artist.Age == YoungestAge))

            //Display all artists with 'William' somewhere in their real name
            List<Artist> AllWills = Artists.Where(artist => artist.RealName.Contains("William")).ToList();
            Console.WriteLine("------------------WILLS------------------");
            Console.WriteLine(AllWills);
            //DONE

            //Display the 3 oldest artist from Atlanta
            // Artist AtlantaOG = Artists.Where(age => age.Age)
            List<Artist> AtlantaOG = Artists.OrderByDescending(artist => artist.Age).Take(3).Where(art => art.Hometown == "Atlanta").ToList();
            // DONE

            //(Optional) Display the Group Name of all groups that have members that are not from New York City
            // List<Group> NotFromNYC = Groups.Join(Artists, group => group.Id, member => member.GroupId, (group, member) => {group.Members.Add(member); return group;}).Where(group => group.Members.Hometown !="New York City").ToList();
            
            // List<Group> NotFromNYC = Groups.Join(Artists, group => group.Id, member => member.GroupId, (group, member) => {group.Members.Add(member); return group;}).ToList();
            // Console.WriteLine(NotFromNYC);

            List<Group> NotFromNYC = Groups.Join(Artists, group => group.Id, artist => artist.GroupId, (group, artist) => {group.Members.Add(artist); return group;}).Distinct().Where(group => group.Members.Any(artist => artist.Hometown != "New York City")).ToList();
            
            Console.WriteLine(NotFromNYC);

            
            // List<Group> NotNYC = Group.Join(Artists, group => group.Members, member => member.Hometown, (group, member) => {group, member} =>
            // ; return group;}).Where() );

            // List<Artist> weDumb = Artists.Where(dude => dude.Hometown != "New York City").Where(man => man.GroupId != 0).ToList();
            // List<Group> weDumber = Groups.Join(weDumb, group => group.Id, member => member.GroupId, (group, member) => {group.Members.Add(member); return group;}).Distinct().ToList();
            // Console.WriteLine("Jeremy is an idiot");
            // Console.WriteLine(weDumber);    
            //(Optional) Display the artist names of all members of the group 'Wu-Tang Clan'
	        System.Console.WriteLine("$$$$$$$$$$$$$$$__WU-TANG__$$$$$$$$$$$$$$$");
            IEnumerable<string> WuTang = Artists.Join(Groups, artist => artist.GroupId, group => group.Id, (artist, group) => {artist.Group = group; return artist;}).Where(artist => artist.Group.GroupName == "Wu-Tang").Select(artist => artist.ArtistName);
            System.Console.WriteLine(WuTang);
	        System.Console.WriteLine("$$$CASH__RULES__EVERYTHING__AROUND__ME$$$");
            //DONE
        }
    }
}