using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using System.Text.RegularExpressions;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using IdentityLogin.Models;
using IdentityLogin.Services;

namespace IdentityLogin.Controllers
{
    public class HomeController : Controller
    {
        private MyContext dbContext;
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private readonly IEmailSender _emailSender;
        public HomeController(
            MyContext context,
            UserManager<User> userManager,
            IEmailSender emailSender,
            SignInManager<User> signInManager)
        {
            dbContext = context;
            _userManager = userManager;
            _signInManager = signInManager;
            _emailSender = emailSender;
        }


        [HttpGet("")]
        public IActionResult Index()
        {
            HttpContext.SignOutAsync(IdentityConstants.ExternalScheme);
            return View();
        }

        [HttpPost("/createUser")]
        public async Task<IActionResult> CreateUser(RegisterViewModel AUser)
        {
            if(ModelState.IsValid)
            {
                User NewUser = new User { UserName = AUser.Username, Email = AUser.Email };
      
                IdentityResult result = await _userManager.CreateAsync(NewUser, AUser.Password);
     
                if(result.Succeeded)
                {
                    // var code = await _userManager.GenerateEmailConfirmationTokenAsync(NewUser);
                    // var callbackUrl = Url.EmailConfirmationLink(NewUser.Id, code, Request.Scheme);
                    // await _emailSender.SendEmailConfirmationAsync(AUser.Email, callbackUrl);

                    await _signInManager.SignInAsync(NewUser, isPersistent: false);
                    return RedirectToAction("Success");
                }

                foreach( var error in result.Errors )
                {
                    ModelState.AddModelError("AUser.Password", error.Description);
                }
            }
            return View("Index");
        }

        [HttpPost("/signin")]
        public async Task<IActionResult> UserLogin(LoginViewModel myUser)
        {
            if(ModelState.IsValid)
            {
                var result = await _signInManager.PasswordSignInAsync(myUser.Username, myUser.Password, isPersistent: false, lockoutOnFailure: false);
                if(result.Succeeded)
                {
                    return RedirectToAction("Success");
                }
                ModelState.AddModelError("myUser.Email", "Invalid login attempt.");
            }
            return View("Index");
        }

        // [HttpGet("")]
        // [AllowAnonymous]
        // public async Task<IActionResult> ConfirmEmail(string userId, string code)
        // {
        //     if (userId == null || code == null)
        //     {
        //         return RedirectToAction("Index");
        //     }
        //     var user = await _userManager.FindByIdAsync(userId);
        //     if (user == null)
        //     {
        //         throw new ApplicationException($"Unable to load user with ID '{userId}'.");
        //     }
        //     var result = await _userManager.ConfirmEmailAsync(user, code);
        //     return View(result.Succeeded ? "ConfirmEmail" : "Error");
        // }

        [HttpGet("Success")]
        public async Task<IActionResult> Success()
        {
            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return View("Index");
            }
            return View();
        }

        [HttpGet("/logout")]
        public async Task<IActionResult> LogOut()
        {
            await _signInManager.SignOutAsync();
            return View("Index");
        }

        [HttpGet("recoverPassword")]
        public IActionResult RecoverPassword()
        {
            return View();
        }
    }
}