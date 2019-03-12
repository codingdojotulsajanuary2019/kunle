using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using Form_Submission.Models;

namespace Form_Submission.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("create")]
        public IActionResult Create(MyModel user)
        {
            if(ModelState.IsValid)
            {
                return Redirect("success");
            }
            else
            {
                return View("Index", user);
            }
            
        }

        [HttpGet("success")]
        public IActionResult Success(MyModel user)
        {
            return View(user);
        }
    }
}
