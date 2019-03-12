using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace QuotingDojo.Models
{
    public class MyModel
    {
       [Required]
       [MinLength(2, ErrorMessage="Name must be 2 letter or more")]
       public string Name {get; set;}

       [Required]
       [MinLength(10, ErrorMessage="Quote must be 2 letter or more")]
       public string Quote {get; set;}
    }

    public class Allquotes
    {
        public List<Dictionary<string, object>> AllQuotes {get; set;}
    }
}