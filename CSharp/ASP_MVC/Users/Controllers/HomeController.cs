using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Users.Models;

namespace Users.Controllers
{
    public class HomeController : Controller
    {
        [Route("user")]
        [HttpGet]
        public IActionResult Person()
        {
            User firstUser = new User()
            {
                FirstName = "Alex",
                LastName = "Baddu"
            };
            return View(firstUser);
        }

        [HttpGet("users")]
        public IActionResult AllUser()
        {
            User firstUser = new User()
            {
                FirstName = "Alex",
                LastName = "Baddu"
            };
            User secondUser = new User()
            {
                FirstName = "Moose",
                LastName = "Phillips"
            };
            User thirdUser = new User()
            {
                FirstName = "Sarah",
                LastName = "Blakenship"
            };
            User fifthUser = new User()
            {
                FirstName = "Barborah",
                LastName = "Ricky"
            };
            
            List<User> AllUser = new List<User>()
            {
                firstUser, secondUser, thirdUser, fifthUser
            };

            return View(AllUser);
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            Message first = new Message()
            {
                message = "This is a Model message for my view"
            };
            return View(first);
        }

        [HttpGet("numbers")]
        public IActionResult Num()
        {
            Number first = new Number()
            {
                number = new int [] {1,2,3,10,43,5}
            };
            return View(first);
        }
    }
}
