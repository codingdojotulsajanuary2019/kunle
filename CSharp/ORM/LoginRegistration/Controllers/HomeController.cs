using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
<<<<<<< HEAD
using System.Text.RegularExpressions;
=======
>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
using LoginRegistration.Models;

namespace LoginRegistration.Controllers
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
            return View();
        }

        [HttpPost("/createUser")]
        public IActionResult CreateUser(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(dbContext.Users.Any(u => u.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email already exists!");
                    return View("Index");
                }
<<<<<<< HEAD
                Regex rgx = new Regex(@"^[a-zA-Z]+$");
                if(rgx.IsMatch(newUser.Username))
                {
                    PasswordHasher<User> Hasher = new PasswordHasher<User>();
                    newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

                    dbContext.Add(newUser);
                    dbContext.SaveChanges();

                    User thisUser = dbContext.Users.Last();
                    int id = thisUser.UserId;
                    HttpContext.Session.SetInt32("UserId", id);

                    return RedirectToAction("Success", new{id = id});
                }
                else
                {
                    ModelState.AddModelError("Username", "Username must be letters only");
                    return View("Index");
                }
=======

                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);

                dbContext.Add(newUser);
                dbContext.SaveChanges();

                User thisUser = dbContext.Users.Last();
                int id = thisUser.UserId;
                HttpContext.Session.SetInt32("UserId", id);

                return RedirectToAction("Success", new{id = id});
>>>>>>> d677208bca8bb55bdb71ae4ada3923d5152de2c9
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("/login")]
        public IActionResult Login()
        {
            return View();
        }

        [HttpPost("/signin")]
        public IActionResult UserLogin(myUser thisUser)
        {
            if(ModelState.IsValid)
            {
                var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == thisUser.Email);
                if(userInDb == null)
                {
                    ModelState.AddModelError("Email", "Invalid Email or Password");
                    return View("Login");
                }

                var hasher = new PasswordHasher<myUser>();
                var result = hasher.VerifyHashedPassword(thisUser, userInDb.Password, thisUser.Password);

                if(result == 0)
                {
                    ModelState.AddModelError("Email", "Invalid Email or Password");
                    return View("Login");
                }
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("success", new{id = userInDb.UserId});
            }
            return View("Login");
        }

        [HttpGet("/success/{id}")]
        public IActionResult Success(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                return RedirectToAction("Login");
            }
            User thisUser = dbContext.Users.FirstOrDefault(u => u.UserId == id);
            return View(thisUser);
        }

        [HttpGet("/logout")]
        public IActionResult LogOut()
        {
            HttpContext.Session.Clear();
            return View("Login");
        }
    }
}
