using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginRegistration.Models
{
    public class User
    {
       [Key]
       public int UserId {get; set;}

       [Required]
       [MinLength(2, ErrorMessage="First name must be atleast 2 characters")]
       [Display(Name = "First Name")]
       public string FirstName {get; set;}

       [Required]
       [MinLength(2, ErrorMessage="Last name must be atleast 2 characters")]
       [Display(Name = "Last Name")]
       public string LastName {get; set;}

       [Required]
<<<<<<< HEAD
       [MinLength(2, ErrorMessage="Username must be atleast 2 characters")]
       public string Username {get; set;} ="";

       [Required]
=======
>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
       [DataType(DataType.EmailAddress, ErrorMessage="Invalid Email Address")]
       public string Email {get; set;}

       [Required]
       [MinLength(8, ErrorMessage="Password must be atleast 8 character long")]
       [DataType(DataType.Password)]
       public string Password {get; set;}
<<<<<<< HEAD
=======

>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
       public DateTime CreatedAt {get; set;} = DateTime.Now;
       public DateTime UpdatedAt {get; set;} = DateTime.Now;

       [NotMapped]
       [Compare("Password", ErrorMessage="Passwords does not match")]
       [DataType(DataType.Password)]
       [Display(Name = "Confirm Password")]
       public string Confirm {get; set;}
    }

    public class myUser
    {
       [Required]
       [DataType(DataType.EmailAddress, ErrorMessage="Invalid Email Address")]
       public string Email {get; set;}

       [Required]
       [MinLength(8, ErrorMessage="Password must be atleast 8 character long")]
       [DataType(DataType.Password)]
       public string Password {get; set;}
    }
}