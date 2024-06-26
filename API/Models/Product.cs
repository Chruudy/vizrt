using System.ComponentModel.DataAnnotations;

namespace API.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public int Price { get; set; }
        public string Name { get; set; } = "";
        public string Category { get; set; } = "";
        public string Image { get; set; } = "";
        public string Description { get; set; } = "";
        public DateTime DateAdded { get; set; } = DateTime.Now;
        public bool IsPopular { get; set; } = false;
    }
}
