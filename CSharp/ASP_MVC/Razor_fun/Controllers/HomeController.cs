using Microsoft.AspNetCore.Mvc;
namespace Razor_fun
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Index()
        {
            return View();
        }
    }
}