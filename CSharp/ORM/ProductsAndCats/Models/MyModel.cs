using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCats.Models
{
    public class Product
    {
       [Key]
       public int ProductId {get; set;}
<<<<<<< HEAD

       [Required]
       public string Name {get; set;}

       [Required]
       public string Description {get; set;}

       [Required (ErrorMessage = "Enter product price")]
       [DataType(DataType.Currency)]
       public Decimal? Price {get; set;}
       public DateTime CreatedAt {get; set;} = DateTime.Now;
       public DateTime UpdatedAt {get; set;} = DateTime.Now;
=======
       public string Name {get; set;}
       public string Description {get; set;}
       public Decimal Price {get; set;}
       public DateTime CreatedAt {get; set;}
       public DateTime UpdatedAt {get; set;}
>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
       public List<Association> ProductCategories {get; set;}
    }

    public class Category
    {
        [Key]
        public int CategoryId {get; set;}
<<<<<<< HEAD

        [Required]
        public string Name {get; set;}
        public DateTime CreatedAt {get; set;} = DateTime.Now;
        public DateTime UpdatedAt {get; set;} = DateTime.Now;
=======
        public string Name {get; set;}
        public DateTime CreatedAt {get; set;}
        public DateTime UpdatedAt {get; set;}
>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
        public List<Association> CategoryProducts {get; set;}
    }

    public class Association
    {
<<<<<<< HEAD
        [Key]
        public int AssociationId {get; set;}

        [Required (ErrorMessage="Choose a product")]
        public int? ProductId {get; set;}

        [Required (ErrorMessage="Choose product category")]
        public int? CategoryId {get; set;}
        public Product Product {get; set;}
        public Category Category {get; set;}
    }

    public class AllContent
    {
        public List<Category> AllCategory {get; set;}
        public List<Product> AllProduct {get; set;}
        public Product thisProduct {get; set;}
        public Category thisCategory {get; set;}
        public Association Relationship {get; set;}
    }
=======
        public int AssociationId {get; set;}
        public int ProductId {get; set;}
        public int CategoryId {get; set;}
        public Product Product {get; set;}
        public Category Category {get; set;}
    }
>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
}