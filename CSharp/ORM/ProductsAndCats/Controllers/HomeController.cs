using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProductsAndCats.Models;

namespace ProductsAndCats.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        public HomeController(MyContext context)
        {
            dbContext = context;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            return RedirectToAction("Products");
        }

        [HttpGet("/products")]
        public IActionResult Products()
        {
            AllContent Products = new AllContent()
            {
                AllProduct = dbContext.Products.ToList()
            };
            return View(Products);
        }

        [HttpGet("/categories")]
        public IActionResult Category()
        {
            AllContent Categories = new AllContent()
            {
                AllCategory = dbContext.Categories.ToList()
            };
            return View(Categories);
        }

        [HttpPost("/products/new")]
        public IActionResult newProduct(Product thisProduct)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(thisProduct);
                dbContext.SaveChanges();

                Product product = dbContext.Products.Last();
                int id = product.ProductId;

                return RedirectToAction("AddCategory", new{id = id});
            }
            else
            {
                Console.WriteLine("form entry is invalid");
                AllContent Products = new AllContent()
                {
                    AllProduct = dbContext.Products.ToList()
                };
                return View("Products", Products);
            }
        }

        [HttpPost("/categories/new")]
        public IActionResult newCategory(Category thisCategory)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(thisCategory);
                dbContext.SaveChanges();

                Category category = dbContext.Categories.Last();
                int id = category.CategoryId;

                return RedirectToAction("AddProduct", new{id = id});
            }
            else
            {
                AllContent Categories = new AllContent()
                {
                    AllCategory = dbContext.Categories.ToList()
                };
                return View("Category", Categories);
            };
        }

        [HttpGet("/products/{id}")]
        public IActionResult AddCategory(int id)
        {
            AllContent product = new AllContent()
            {
                thisProduct = dbContext.Products.Include(prod => prod.ProductCategories)
                .ThenInclude(assn => assn.Category)
                .FirstOrDefault(p => p.ProductId == id),

                AllCategory = dbContext.Categories.Include(c => c.CategoryProducts)
                .ThenInclude(assn => assn.Category)
                .Where(cat => cat.CategoryProducts.Any(assoc => assoc.ProductId == id) == false).ToList()
            };
            return View(product);
        }

        [HttpGet("/categories/{id}")]
        public IActionResult AddProduct(int id)
        {
            AllContent category = new AllContent()
            {
                thisCategory = dbContext.Categories.Include(cat => cat.CategoryProducts)
                .ThenInclude(assn => assn.Product)
                .FirstOrDefault(cat => cat.CategoryId == id),

                AllProduct = dbContext.Products.Include(p => p.ProductCategories)
                .ThenInclude(assn => assn.Product)
                .Where(cat => cat.ProductCategories.Any(assoc => assoc.CategoryId == id) == false).ToList(),

            };
            return View(category);
        }


        [HttpPost("/products/{id}/addcat")]
        public IActionResult linkCategory(int id, Association Relationship)
        {
            if(ModelState.IsValid)
            {
              if(Relationship.ProductId == id)
              {
                  dbContext.Add(Relationship);
                  dbContext.SaveChanges();
              }
                return RedirectToAction ("AddCategory");
            }
            else
            {
                AllContent product = new AllContent()
                {
                    thisProduct = dbContext.Products.Include(prod => prod.ProductCategories)
                    .ThenInclude(assn => assn.Category)
                    .FirstOrDefault(p => p.ProductId == id),

                    AllCategory = dbContext.Categories.ToList()
                };
                Console.WriteLine("im here");
                return View("AddCategory", product);
            }          
        }

        [HttpPost("/categories/{id}/addprod")]
        public IActionResult linkProduct(int id, Association Relationship)
        {
            if(ModelState.IsValid)
            {
                if(Relationship.CategoryId == id)
                {
                    dbContext.Add(Relationship);
                    dbContext.SaveChanges();
                }
                return RedirectToAction ("AddProduct");
            }
            else
            {
                AllContent category = new AllContent()
                {
                    thisCategory = dbContext.Categories.Include(c => c.CategoryProducts)
                    .ThenInclude(assn => assn.Product)
                    .FirstOrDefault(c => c.CategoryId == id),

                    AllProduct = dbContext.Products.ToList()
                };
                return View("AddProduct", category);
            }          
        }
    }
}
