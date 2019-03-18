using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Crudelicious.Models
{
    public class Dish
    {
       [Key]
       public int DishId {get; set;}

       [Required]
       [Display(Name = "Name of Dish")]
       public string Name {get; set;}

       [Required]
       [Display(Name = "Chef's Name")]
       public string Chef {get; set;}

       [Required (ErrorMessage ="The Tastiness field is required.")]
       [Range(1,5, ErrorMessage ="Tastiness must be between 1-5 ")]
       public int Tastiness {get; set;}

       [Required (ErrorMessage ="The Calorie field is required.")]
       [Range(1, int.MaxValue, ErrorMessage="Calories cannot be lesser than zero 0")]
       [Display(Name = "No. of calories")]
       public int Calories {get; set;}

       [Required]
       [MinLength(15, ErrorMessage="Description must be atleast 15 characters")]
       public string Description {get; set;}
       public DateTime CreatedAt {get; set;} = DateTime.Now;
       public DateTime UpdatedAt {get; set;} = DateTime.Now;

    }

    public class AllDish
    {
        public List<Dish> allDishes {get; set;}
    }
}