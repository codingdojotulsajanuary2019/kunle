using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace IdentityLogin.Models
{
   public class User : IdentityUser
   {

   }

   public class RegisterViewModel
    {
       [Required]
       [MinLength(2, ErrorMessage="Name must be atleast 2 characters")]
       public string Username {get; set;}

       [Required]
       [DataType(DataType.EmailAddress, ErrorMessage="Invalid Email Address")]
       public string Email {get; set;}

       [Required]
       [MinLength(8, ErrorMessage="Password must be atleast 8 character long")]
       [DataType(DataType.Password)]
       public string Password {get; set;}
   

       [NotMapped]
       [Compare("Password", ErrorMessage="Passwords does not match")]
       [DataType(DataType.Password)]
       [Display(Name = "Confirm Password")]
       public string Confirm {get; set;}       
    }

    public class LoginViewModel
    {
       [Required]
      //  [DataType(DataType.EmailAddress, ErrorMessage="Invalid Email Address")]
       public string Username {get; set;}

       [Required]
       [MinLength(8, ErrorMessage="Password must be atleast 8 character long")]
       [DataType(DataType.Password)]
       public string Password {get; set;}
       
       [Display(Name = "Remember me?")]
       public bool RememberMe { get; set; }
    }

    public class IndexPageView
    {
        public RegisterViewModel AUser {get; set;}
        public LoginViewModel myUser {get; set;}
    }
}