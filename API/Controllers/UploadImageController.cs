using Microsoft.AspNetCore.Mvc;
namespace API.Controllers;
[ApiController]
[Route("[controller]")]
public class UploadImageController : ControllerBase
{
    private readonly IWebHostEnvironment hosting;
    public UploadImageController(IWebHostEnvironment _hosting)
    {
        hosting = _hosting;
    }
    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        string rootPath = hosting.WebRootPath;
        string absolutePath = Path.Combine($"{rootPath}/images/{file.FileName}");
        using(var fileStream = new FileStream(absolutePath, FileMode.Create))
        {
            file.CopyTo(fileStream);
        }
        return Ok();
    }
}