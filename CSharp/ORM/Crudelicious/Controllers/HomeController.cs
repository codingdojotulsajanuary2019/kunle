using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Crudelicious.Models;

namespace Crudelicious.Controllers
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
            AllDish Dishes = new AllDish()
            {
                allDishes = dbContext.Dishes.OrderByDescending(d => d.CreatedAt).ToList()
            };
            return View(Dishes);
        }

        [HttpGet("addDish")]
        public IActionResult newDish()
        {
            return View();{}
        }

        [HttpPost("create")]
        public IActionResult Create(Dish newdish)
        {
            if(ModelState.IsValid)
            {
                dbContext.Add(newdish);
                dbContext.SaveChanges();

                Dish this_Dish = dbContext.Dishes.Last();
                int id = this_Dish.DishId;

                return RedirectToAction("showDish", new{id = id});
            }
            else
            {
                return View("newDish");
            }
        }

        [HttpGet("dish/{id}")]
        public IActionResult showDish(int id)
        {
            Dish dish = dbContext.Dishes.FirstOrDefault(d => d.DishId == id);
            return View(dish);
        }

        [HttpGet("dish/{id}/edit")]
        public IActionResult editDish(int id)
        {
            Dish dish = dbContext.Dishes.FirstOrDefault(d => d.DishId == id);
            return View(dish);
        }

        [HttpPost("dish/{id}/update")]
        public IActionResult Update(int id, Dish this_Dish)
        {
            if(ModelState.IsValid)
            {
                Dish dish = dbContext.Dishes.FirstOrDefault(d => d.DishId == id);
                dish.Name = this_Dish.Name;
                dish.Chef = this_Dish.Chef;
                dish.Tastiness = this_Dish.Tastiness;
                dish.Calories = this_Dish.Calories;
                dish.Description = this_Dish.Description;
                dish.UpdatedAt = DateTime.Now;
                
                dbContext.SaveChanges();
                return RedirectToAction("showDish");
            }
            else
            {
                return RedirectToAction("editDish", new{id = id});
            }
        }

        [HttpGet("dish/{id}/destroy")]       
        public IActionResult Destroy(int id)
        {
            Dish dish = dbContext.Dishes.FirstOrDefault(d => d.DishId == id);
            dbContext.Dishes.Remove(dish);
            dbContext.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}
