using Microsoft.AspNetCore.Mvc;
namespace Time_Display
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public IActionResult Time()
        {
            return View();
        }
    }
} 