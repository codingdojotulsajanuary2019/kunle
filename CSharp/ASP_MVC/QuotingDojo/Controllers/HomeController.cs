using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using QuotingDojo.Models;
using System.ComponentModel.DataAnnotations;
using DbConnection;

namespace QuotingDojo.Controllers
{
    public class HomeController : Controller
    {
        [Route("")]
        [HttpGet]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("quotes")]
        public IActionResult NewQuote(MyModel quotes)
        {
            if(ModelState.IsValid)
            {
                string query = $"INSERT INTO quotes (name, quote) VALUES ('{quotes.Name}', '{quotes.Quote}')";
                DbConnector.Execute(query);
                return RedirectToAction("Display");
            }
            else
            {
                return View("Index");
            }
        }

        [HttpGet("quotes")]
        public IActionResult Display()
        {
            Allquotes Result = new Allquotes()
            {
                AllQuotes = DbConnector.Query("SELECT name, quote, Date_format(created_at, '%H:%i %p %M %d %Y')AS created_at FROM quotes ORDER BY created_at DESC")
            };
            
            return View(Result);
        }
    }
}
