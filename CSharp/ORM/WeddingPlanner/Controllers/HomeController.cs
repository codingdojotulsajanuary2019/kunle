using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using WeddingPlanner.Models;

namespace WeddingPlanner.Controllers
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
        public IActionResult CreateUser(User User)
        {
            if(ModelState.IsValid)
            {
                if(dbContext.Users.Any(u => u.Email == User.Email))
                {
                    ModelState.AddModelError("User.Email", "Email already exists!");
                    return View("Index");
                }

                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                User.Password = Hasher.HashPassword(User, User.Password);

                dbContext.Add(User);
                dbContext.SaveChanges();

                User thisUser = dbContext.Users.Last();
                int id = thisUser.UserId;
                HttpContext.Session.SetInt32("UserId", id);

                return RedirectToAction("Dashboard");
            }
            else
            {
                return View("Index");
            }
        }


        [HttpPost("/signin")]
        public IActionResult UserLogin(myUser myUser)
        {
            if(ModelState.IsValid)
            {
                var userInDb = dbContext.Users.FirstOrDefault(u => u.Email == myUser.Email);
                if(userInDb == null)
                {
                    ModelState.AddModelError("myUser.Email", "Invalid Email or Password");
                    return View("Index");
                }

                var hasher = new PasswordHasher<myUser>();
                var result = hasher.VerifyHashedPassword(myUser, userInDb.Password, myUser.Password);

                if(result == 0)
                {
                    ModelState.AddModelError("myUser.Email", "Invalid Email or Password");
                    return View("Index");
                }
                HttpContext.Session.SetInt32("UserId", userInDb.UserId);
                return RedirectToAction("Dashboard");
            }
            return View("Index");
        }

        [HttpGet("/Dashboard")]
        public IActionResult Dashboard()
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }
            int id = (int)userId;
            ViewBag.User = id;
            AllWedding dash = new AllWedding()
            {
                allWedding = dbContext.Weddings.Include(wed => wed.Creator)
                .Include(wed => wed.Guests)
                .ThenInclude(res => res.User)
                .ToList()
            };
            return View(dash);
        }

        [HttpGet("/logout")]
        public IActionResult LogOut()
        {
            HttpContext.Session.Clear();
            return View("Index");
        }

        [HttpGet("new/wedding")]
        public IActionResult newWedding()
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.User = (int)userId;
            return View();
        }

        [HttpPost("wedding/create")]
        public IActionResult createWedding(Wedding newWedding)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            ViewBag.User = (int)userId;

            if(ModelState.IsValid)
            {
                if(newWedding.UserId == ViewBag.User)
                {
                    dbContext.Add(newWedding);
                    dbContext.SaveChanges();

                    Wedding thiswed = dbContext.Weddings.LastOrDefault();
                    int thisId = thiswed.WeddingId;

                    Reservation reserve = new Reservation()
                    {
                        UserId = (int)userId,
                        WeddingId = thisId
                    };
                    dbContext.Add(reserve);
                    dbContext.SaveChanges();

                    return RedirectToAction("weddingInfo", new{id = thisId});
                } 
                return View("newWedding");              
            }
            else
            {
                ModelState.Remove("Date");
                ModelState.AddModelError("Date", "Choose a Date");
                return View("newWedding");
            }
        }

        [HttpGet("wedding/{id}/Info")]
        public IActionResult weddingInfo(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }

            Wedding thiswed = dbContext.Weddings.Include(wed => wed.Guests)
            .ThenInclude(res => res.User)
            .FirstOrDefault(wed => wed.WeddingId == id);

            return View(thiswed);      
        }

        [HttpGet("/reserve/{id}")]
        public IActionResult ReserveSeat(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }

            Reservation reserve = new Reservation()
            {
                UserId = (int)userId,
                WeddingId = id
            };

            dbContext.Add(reserve);
            dbContext.SaveChanges();

            return RedirectToAction("Dashboard");
        }

        [HttpGet("/unreserve/{id}")]
        public IActionResult UnReserveSeat(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }

            Reservation reserved = dbContext.Reservations.FirstOrDefault(res => res.ReservationId == id);
            dbContext.Reservations.Remove(reserved);
            dbContext.SaveChanges();

            return RedirectToAction("Dashboard");
        }

        [HttpGet("destroy/{id}")]
        public IActionResult DeleteWedding(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }

            Wedding wedding = dbContext.Weddings.FirstOrDefault(wed => wed.WeddingId == id);
            dbContext.Weddings.Remove(wedding);
            dbContext.SaveChanges();

            return RedirectToAction("Dashboard");
        }
    }
}

