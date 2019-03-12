using System;
using System.ComponentModel.DataAnnotations;

namespace Dojo_Survey.Models
{
    public class Survey
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be atleast 2 charcters long")]
        public string Name {get; set;}

        [Required]
        public string Location {get; set;}
        
        [Required]
        public string Language {get; set;}

        [MinLength(20, ErrorMessage = "Comment must be atleast 20 characters long")]
        public string Comment {get; set;}
    }
}