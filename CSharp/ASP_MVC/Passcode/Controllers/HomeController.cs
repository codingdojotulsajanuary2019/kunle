using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Passcode.Models;

namespace Passcode.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            if(HttpContext.Session.GetInt32("Count") == null)
            {
                HttpContext.Session.SetInt32("Count", 0);
            }
            
            Random rand = new Random();
            ViewBag.Display = rand.Next();
            
            int? num = HttpContext.Session.GetInt32("Count");
            HttpContext.Session.SetInt32("Count", (int)++num);

            ViewBag.Count = HttpContext.Session.GetInt32("Count");

            Console.WriteLine(num);
            return View();
        }
    }
}
