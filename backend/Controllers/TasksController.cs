using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasksController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetTasks()
        {
            return Ok(new[] { "Task 1", " Task 2"});
        }

        [HttpPost]
        public IActionResult CreateUser([FromBody] User user)
        {
            Console.WriteLine(user.Username);
            Console.WriteLine(user.Password);

            return Ok();
        }
    }
}

