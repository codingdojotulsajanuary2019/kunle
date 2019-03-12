using System;
using System.ComponentModel.DataAnnotations;

namespace Form_Submission.Models
{
    public class MyModel
    {
       [Required]
       [MinLength(4,
       ErrorMessage = "First Name must be atleast 4 letters")]
       [Display(Name = "First Name")]
       public string F_Name {get; set;}

       [Required]
       [MinLength(4,
       ErrorMessage = "First Name must be atleast 4 letters")]
       [Display(Name = "Last Name")]
       public string L_Name {get; set;}

       [Required]
       [Range(1, 100,
       ErrorMessage = "Must be atleast 1year old")]
       public int Age {get; set;}
       
       [Required]
       [EmailAddress
       (ErrorMessage = "Invalid Email Address")]
       [Display(Name = "Email")]
       public string Email {get; set;}

       [Required]
       [MinLength(8,
       ErrorMessage = "Password must be atleast 8 characters long")]
       [DataType(DataType.Password)]
       public string Password {get; set;}
    }
}