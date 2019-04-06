using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WeddingPlanner.Models
{
    public class ValidateDate: ValidationAttribute
    {
        protected override ValidationResult IsValid(Object value, ValidationContext validationContext)
        {    
            Wedding wedding = (Wedding)validationContext.ObjectInstance;
            DateTime Today = DateTime.Today;           
            // your validation logic
            if (wedding.Date > Today)
            {
                return ValidationResult.Success;
            }
            else
            {
                if(wedding.Date < Today)
                {
                    return new ValidationResult("Date cannot be in the past");
                }
                return new ValidationResult("Select a future date");
            }
        }
    }
}