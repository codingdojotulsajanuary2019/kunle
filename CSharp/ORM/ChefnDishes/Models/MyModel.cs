using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ChefnDishes.Models
{
    public class ValidateAge: ValidationAttribute
    {
        protected override ValidationResult IsValid(Object value, ValidationContext validationContext)
        {    
            Chef chef = (Chef)validationContext.ObjectInstance;
            DateTime Age = DateTime.Today.AddYears(-18);           
            // your validation logic
            if (chef.BirthDate <= Age)
            {
                return ValidationResult.Success;
            }
            else
            {
                if(chef.BirthDate >= DateTime.Today)
                {
                    return new ValidationResult("Date cannot be in the future");
                }
                return new ValidationResult("Chef must be atleast 18 years old");
            }
        }
    }
    
    public class Chef
    {
       [Key]
       public int ChefId {get; set;}

       [Required]
       [MinLength(2, ErrorMessage = "Name must be at least 2 letters long")]
       [Display(Name="First Name")]
       public string FirstName {get; set;}

       [Required]
       [MinLength(2, ErrorMessage = "Last Name must be at least 2 letters long")]
       [Display(Name="Last Name")]
       public string LastName {get; set;}

       [Required]
       [ValidateAge]
       [Display(Name="Date of birth")]
       public DateTime BirthDate {get; set;}

       public DateTime CreatedAt {get; set;} = DateTime.Now;
       public DateTime UpdatedAt {get; set;} = DateTime.Now;
       public List<Dish> ChefRecipes {get; set;}
    }

    public class Dish
    {
        [Key]
        public int DishId {get; set;}

        [Required]
        [MinLength(2, ErrorMessage = "Dish Name must be at least 2 letters long")]
        [Display(Name="Name of Dish")]
        public string Name {get; set;}

        [Required (ErrorMessage="The Calories field is required")]
        [Range(1, int.MaxValue, ErrorMessage="Calories cannot be lesser than zero 0")]
        [Display(Name="No of Calories")]
        public int? Calories {get; set;}

        [Required]
        [MinLength(15, ErrorMessage = "Description must be at least 20 characters long")]
        public string Description {get; set;}

        [Required (ErrorMessage="The Tastiness field is required")]
        [Range(1, 5, ErrorMessage="tastiness must be between 1-5")]
        public int? Tastiness {get; set;}

        [Required]
        [Display(Name="Chefs")]
        public int ChefId {get; set;}
        public DateTime CreatedAt {get; set;} = DateTime.Now;
        public DateTime UpdatedAt {get; set;} = DateTime.Now;
        public Chef RecipeOwner {get; set;}
    }

    public class AllDish
    {
        public List<Dish> allDishes {get; set;}
    }

    public class AllModels
    {
        public List<Chef> allChefs {get; set;}
        public Dish newDish {get; set;}
    }
}