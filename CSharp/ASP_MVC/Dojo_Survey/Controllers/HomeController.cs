using Microsoft.AspNetCore.Mvc;
namespace Dojo_Survey
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("result")]
        public IActionResult Result(string name, string dojo, string language, string comment)
        {
            ViewBag.Name = name;
            ViewBag.Location = dojo;
            ViewBag.Language = language;
            ViewBag.Comment = comment;
            return View();
        }
    }
}