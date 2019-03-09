using Microsoft.AspNetCore.Mvc;
namespace Practice
{
    public class HomeController : Controller
    {
        [HttpGet("")]
        public string Index()
        {
            return "Hello from Controller";
        }
 
        [HttpGet("hello")]
        public string Hello()
        {
            return "Second Hello from here";
        }

        [HttpGet("users/{username}")]
        public string HelloUser(string username)
        {
            return $"Hello from {username}";
        }
    }
}