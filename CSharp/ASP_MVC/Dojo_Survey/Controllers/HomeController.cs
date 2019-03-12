using System;
using Dojo_Survey.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Dojo_Survey
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("survey")]
        public IActionResult Result(Survey result)
        {
            if(ModelState.IsValid)
            {
                return View(result);
            }
            else
            {
                return View("Index", result);
            }           
        }
    }
}