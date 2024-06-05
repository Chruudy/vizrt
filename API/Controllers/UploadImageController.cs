using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;
using Microsoft.Data.Sqlite;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UploadImageController : ControllerBase
    {
        private readonly IWebHostEnvironment _hosting;

        public UploadImageController(IWebHostEnvironment hosting)
        {
            _hosting = hosting;
        }

        [HttpPost]
        public IActionResult SaveImage(IFormFile file, [FromForm] decimal price, [FromForm] string name, [FromForm] string category)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded.");
            }

            if (price <= 0)
            {
                return BadRequest("Invalid price.");
            }

            if (string.IsNullOrWhiteSpace(name))
            {
                return BadRequest("Invalid name.");
            }

            if (string.IsNullOrWhiteSpace(category))
            {
                return BadRequest("Invalid category.");
            }

            // Define the root path for uploads
            string rootPath = Path.Combine(_hosting.ContentRootPath, "public", "uploads");

            // Logging the root path
            Console.WriteLine($"Root Path: {rootPath}");

            // Create the uploads directory if it doesn't exist
            if (!Directory.Exists(rootPath))
            {
                Directory.CreateDirectory(rootPath);
            }

            // Define the absolute path for the file
            string absolutePath = Path.Combine(rootPath, file.FileName);

            // Logging the absolute path
            Console.WriteLine($"Absolute Path: {absolutePath}");

            // Save the file
            using (var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
                file.CopyTo(fileStream);
            }

            // Generate the URL of the uploaded image
            string imageUrl = $"{Request.Scheme}://{Request.Host}/public/uploads/{file.FileName}";

            // Logging the image URL
            Console.WriteLine($"Image URL: {imageUrl}");

            // Connect to the existing database
            string dbPath = Path.Combine(_hosting.ContentRootPath, "Product.db");

            // Logging the database path
            Console.WriteLine($"DB Path: {dbPath}");

            using (SqliteConnection conn = new SqliteConnection($"Data Source={dbPath}"))
            {
                conn.Open();
                using (SqliteCommand cmd = new SqliteCommand("INSERT INTO Product (Name, Image, Price, Category) VALUES (@Name, @ImageUrl, @Price, @Category)", conn))
                {
                    cmd.Parameters.AddWithValue("@Name", name);
                    cmd.Parameters.AddWithValue("@ImageUrl", imageUrl);
                    cmd.Parameters.AddWithValue("@Price", price);
                    cmd.Parameters.AddWithValue("@Category", category);
                    cmd.ExecuteNonQuery();
                }
            }

            return Ok(new { imageUrl });
        }
    }
}
