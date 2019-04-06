using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using TheWall.Models;

namespace TheWall.Controllers
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
                HttpContext.Session.SetString("Username", thisUser.FirstName);

                return RedirectToAction("Wall");
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
                HttpContext.Session.SetString("Username", userInDb.FirstName);

                return RedirectToAction("Wall");
            }
            return View("Index");
        }

        [HttpGet("wall")]
        public IActionResult Wall()
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }
            int id = (int)userId;
            ViewBag.User = id;

            string Name = HttpContext.Session.GetString("Username");
            ViewBag.Name = Name;

            AllMessages messages = new AllMessages()
            {
                allMessages = dbContext.Messages.Include(msg => msg.Poster)
                .Include(msg => msg.Comments)
                .ThenInclude(c => c.User).OrderByDescending(d => d.CreatedAt)
                .ToList()
            };
            return View(messages);
        }

        [HttpPost("post/message")]
        public IActionResult createPost(Message newMessage)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            ViewBag.User = (int)userId;

            string Name = HttpContext.Session.GetString("Username");
            ViewBag.Name = Name;

            if(ModelState.IsValid)
            {
                dbContext.Add(newMessage);
                dbContext.SaveChanges();
                return RedirectToAction("wall");
            }
            else
            {
                AllMessages messages = new AllMessages()
                {
                    allMessages = dbContext.Messages.Include(msg => msg.Poster)
                    .Include(msg => msg.Comments)
                    .ThenInclude(c => c.User)
                    .ToList()
                };
                return View("Wall", messages);
            }
        }

        [HttpPost("msg/comment")]
        public IActionResult writeComment(Comment newComment)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            ViewBag.User = (int)userId;

            string Name = HttpContext.Session.GetString("Username");
            ViewBag.Name = Name;
            
            if(ModelState.IsValid)
            {
                dbContext.Add(newComment);
                dbContext.SaveChanges();
                return RedirectToAction("wall");
            }
            else
            {
                AllMessages messages = new AllMessages()
                {
                    allMessages = dbContext.Messages.Include(msg => msg.Poster)
                    .Include(msg => msg.Comments)
                    .ThenInclude(c => c.User)
                    .ToList()
                };
                return View("Wall");
            }
        }

        [HttpGet("destroy/{id}")]
        public IActionResult deleteMessage(int id)
        {
            int? userId = HttpContext.Session.GetInt32("UserId");
            if(userId == null)
            {
                ModelState.AddModelError("myUser.Email", "Login to continue");
                return View("Index");
            }
            
            Message todelete = dbContext.Messages.FirstOrDefault(msg => msg.MessageId == id);
            dbContext.Remove(todelete);
            dbContext.SaveChanges();

            return RedirectToAction("wall");
        }

        [HttpGet("/logout")]
        public IActionResult LogOut()
        {
            HttpContext.Session.Clear();
            return View("Index");
        }
    }
}
