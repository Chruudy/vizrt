using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;  // Add this line

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<ProductContext>(
    options => options.UseSqlite("Data Source=Product.db")
);

// Add services to the container.
builder.Services.AddControllers();

// Configure Swagger/OpenAPI
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v2", new OpenApiInfo 
    { 
        Title = "VizrtProduct API", 
        Version = "v2",
        Description = "An API to perform CRUD operations on Products",
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v2/swagger.json", "VizrtProduct API V2");
    });
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();