using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class Wedding
    {
        [Key]
        public int WeddingId {get; set;}

        [Required]
        [MinLength(2, ErrorMessage="Name must be atleast 2 characters")]
        [Display(Name = "Second Couple")]
        public string Husband {get; set;}

        [Required]
        [MinLength(2, ErrorMessage="Name must be atleast 2 characters")]
        [Display(Name = "First Couple")]
        public string Wife {get; set;}

        [ValidateDate]       
        public DateTime Date {get; set;}

        [Required]
        [Display(Name = "Wedding Venue")]
        public string Address {get; set;}
        public int UserId {get; set;}
        public User Creator {get; set;}
        public List<Reservation> Guests {get; set;}
    }

    public class Reservation
    {
        [Key]
        public int ReservationId {get; set;}
        public int UserId {get; set;}
        public int WeddingId {get; set;}
        public User User {get; set;}
        public Wedding Wedding {get; set;}
    }

    public class AllWedding
    {
        public List<Wedding> allWedding {get; set;}
    }
}