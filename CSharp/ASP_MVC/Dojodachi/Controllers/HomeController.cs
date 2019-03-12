using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Dojodachi.Models;

namespace Dojodachi.Controllers
{
    public class HomeController : Controller
    {
        Random rand = new Random();

        [HttpGet("dojodachi")]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetInt32("Happiness") == null)
            {
                HttpContext.Session.SetInt32("Happiness", 20);
                HttpContext.Session.SetInt32("Fullness", 20);
                HttpContext.Session.SetInt32("Energy", 50);
                HttpContext.Session.SetInt32("Meals", 3);
                HttpContext.Session.SetString("Action", "start");
            }

            MyModel Dachi = new MyModel
            {
                Happiness= (int)HttpContext.Session.GetInt32("Happiness"),
                Fullness = (int)HttpContext.Session.GetInt32("Fullness"),
                Energy = (int)HttpContext.Session.GetInt32("Energy"),
                Meal = (int)HttpContext.Session.GetInt32("Meals"),
                Action = HttpContext.Session.GetString("Action")
            };

            return View(Dachi);
        }

        [HttpGet("dojodachi/feed")]
        public IActionResult Feed()
        {
            int? fed = HttpContext.Session.GetInt32("Meals");
            if(fed == 0)
            {
                HttpContext.Session.SetString("Action", "meal to eat");
                return Redirect("/dojodachi");
            }
            HttpContext.Session.SetInt32("Meals", (int)--fed);

            int? fullness = HttpContext.Session.GetInt32("Fullness");
            int Gained = rand.Next(5,10);

            if(Gained == 7)
            {
                HttpContext.Session.SetString("Action", "dislike");
                return Redirect("/dojodachi");
            }
            else
            {
                HttpContext.Session.SetString("Action", "fed");
                HttpContext.Session.SetInt32("Fullness", Gained+(int)fullness);
            }
            return Redirect("/dojodachi");
        }

        [HttpGet("dojodachi/play")]
        public IActionResult Play()
        {
            int? energy = HttpContext.Session.GetInt32("Energy");
            HttpContext.Session.SetInt32("Energy", (int)energy-5);
            
            int? happiness = HttpContext.Session.GetInt32("Happiness");
            int Gained = rand.Next(5,10);

            if(Gained == 9)
            {
                HttpContext.Session.SetString("Action", "dislike");
                return Redirect("/dojodachi");
            }
            else
            {
                HttpContext.Session.SetString("Action", "played");
                HttpContext.Session.SetInt32("Happiness", Gained+(int)happiness);
            }
            
            return Redirect("/dojodachi");
        }

        [HttpGet("dojodachi/work")]
        public IActionResult Work()
        {
            int? energy = HttpContext.Session.GetInt32("Energy");
            if(energy == 0)
            {
                HttpContext.Session.SetString("Action", "energy");
                return Redirect("/dojodachi");
            }
            HttpContext.Session.SetInt32("Energy", (int)energy-5);

            int? fed = HttpContext.Session.GetInt32("Meals");
            int Gained = rand.Next(1,4);
            HttpContext.Session.SetInt32("Meals", (int)fed+Gained);
            HttpContext.Session.SetString("Action", "worked");

            return Redirect("/dojodachi");
        }

        [HttpGet("dojodachi/sleep")]
        public IActionResult Sleep()
        {
            int? energy = HttpContext.Session.GetInt32("Energy");
            HttpContext.Session.SetInt32("Energy", 15+(int)energy);

            int? fullness = HttpContext.Session.GetInt32("Fullness");
            int? happiness = HttpContext.Session.GetInt32("Happiness");

            HttpContext.Session.SetInt32("Happiness", (int)happiness-5);
            HttpContext.Session.SetInt32("Fullness", (int)fullness-5);

            HttpContext.Session.SetString("Action", "sleep");

            return Redirect("/dojodachi");
        }


        [HttpGet("dojodachi/reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return Redirect("/dojodachi");
        }
    }
}
