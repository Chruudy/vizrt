using Microsoft.AspNetCore.Mvc;
using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")] // Updated this line
public class ProductController : ControllerBase
{
    private readonly ProductContext context;
    public ProductController(ProductContext _context) // Dependency injection
    {
        context = _context;
    }
    [HttpGet]
    public async Task<List<Product>> Get()
    {
        List<Product> products = await context.Product.ToListAsync();
        return products;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> Get(int id)
    {
        Product? product = await context.Product.FindAsync(id);
        if (product != null)
        {
            return Ok(product);
        }
        else
        {
            return NotFound();
        }
    }

    [HttpPost]
    public async Task<ActionResult<Product>> Post([FromForm] Product newProduct)
    {
        context.Product.Add(newProduct);
        await context.SaveChangesAsync();
        return CreatedAtAction("Get", new { id = newProduct.Id }, newProduct);
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult<Product>> Delete(int id)
    {
        Product? product = await context.Product.FindAsync(id);
        if (product != null)
        {
            context.Product.Remove(product);
            await context.SaveChangesAsync();
        }
        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<ActionResult<Product>> Put(int id, Product editedProduct)
    {
        Product? productToUpdate = await context.Product.FindAsync(id);
        if (productToUpdate == null)
        {
            return NotFound();
        }
        context.Entry(productToUpdate).CurrentValues.SetValues(editedProduct);
        context.Entry(productToUpdate).State = EntityState.Modified;
        await context.SaveChangesAsync();
        return NoContent();
    }
    // New endpoint to fetch image URLs
        [HttpGet("images")]
        public async Task<ActionResult<List<string>>> GetImages()
        {
            var images = await context.Product
                .Select(p => p.Image)
                .Take(6)
                .ToListAsync();

            if (images == null || images.Count == 0)
            {
                return NotFound("No images found.");
            }

            return Ok(images);
        }
}