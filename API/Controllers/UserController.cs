using Microsoft.AspNetCore.Mvc;
using System.Linq;

[ApiController]
[Route("[controller]")]
public class UserController : ControllerBase
{
    private readonly UserContext _context;

    public UserController(UserContext context)
    {
        _context = context;
    }

    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        _context.Users.Add(user);
        _context.SaveChanges();
        return Ok(user);
    }

    [HttpPost("login")]
    public IActionResult Login([FromBody] LoginModel login)
    {
        var user = _context.Users.SingleOrDefault(u => u.Email == login.Email && u.Password == login.Password);
        if (user == null)
        {
            return Unauthorized();
        }
        return Ok(user);
    }
}

public class LoginModel
{
    public string Email { get; set; } = "";
    public string Password { get; set; } = "";
}
