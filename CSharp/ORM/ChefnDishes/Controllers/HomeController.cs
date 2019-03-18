using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ChefnDishes.Models;

namespace ChefnDishes.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        public HomeController(MyContext context)
        {
            dbContext = context;
        }


        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            AllModels chefs = new AllModels()
            {
                allChefs = dbContext.Chefs.Include(dish => dish.ChefRecipes).ToList()
            };
            return View(chefs);
        }

        [HttpGet("chef/new")]
        public IActionResult newChef()
        {
            return View();
        }

        [HttpPost("chef/new/create")]
        public IActionResult createChef(Chef newChef)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(newChef);
                dbContext.SaveChanges();
                return RedirectToAction("Index");
            }
            return View("newChef");
        }

        [HttpGet("/dishes")]
        public IActionResult Dish()
        {
            AllDish dishes = new AllDish()
            {
                allDishes = dbContext.Dishes.Include(chef => chef.RecipeOwner).ToList()
            };
            return View(dishes);
        }

        [HttpGet("dish/new")]
        public IActionResult newDish()
        {
            AllModels chefs = new AllModels()
            {
                allChefs = dbContext.Chefs.ToList()
            };
            return View(chefs);
        }

        [HttpPost("dish/new/create")]
        public IActionResult createDish(Dish newDish)
        {

            if(ModelState.IsValid)
            {
                dbContext.Add(newDish);
                dbContext.SaveChanges();

                return RedirectToAction("Dish");
            }
            else
            {
                 AllModels chefs = new AllModels()
                {
                    allChefs = dbContext.Chefs.ToList()
                };
                return View("newDish", chefs);
            }
        }
    }
}
