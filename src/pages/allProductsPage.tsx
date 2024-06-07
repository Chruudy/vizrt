import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/header";
import Footer from "../components/footer";
import type { Product } from "../components/ProductList"; // Import the new Product interface

const AllProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Explicitly type error state
  const [selectedCategory, setSelectedCategory] = useState("Show-all");
  const [sortBy, setSortBy] = useState("LastPublished");
  const [selectedType, setSelectedType] = useState("All");
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 1000 }); // Initial price range

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:5065/api/Product");
        const productsWithBase64Images = response.data.map((product) => ({
          ...product,
          image: `data:image/jpeg;base64,${product.image}`, // Assuming the image format is JPEG, adjust if necessary
        }));
        setProducts(productsWithBase64Images);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products"); // Assign string to error state
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // New filtering logic
  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory === "Show-all" || product.category === selectedCategory) {
        return true;
      }
      return false;
    })
    .filter((product) => product.price >= priceRange.min && product.price <= priceRange.max)
    .sort((a, b) => {
      switch (sortBy) {
        case "Price":
          return a.price - b.price;
        case "ReversePrice":
          return b.price - a.price; // Sort by price in descending order
        case "Alphabetical":
          return a.name.localeCompare(b.name);
        case "ReverseAlphabetical":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="grid grid-cols-4">
        <div className="bg-brandBGLighter h-full p-4">
          <div className="relative">
            <label className="block text-white font-bold mb-2" htmlFor="Category">
              Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Show-all">Show all</option>
              <option value="Sport">Sport</option>
              <option value="Graphics">Graphics</option>
              <option value="Virtual & XR">Virtual & XR</option>
              <option value="E-sport">E-sport</option>
              <option value="Live Production">Live Production</option>
            </select>
            <div className="mb-4">
              <label className="block text-white font-bold mb-2" htmlFor="graphicType">
                Graphic Type:
              </label>
              <select
                id="type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="All">All</option>
                <option value="Scoreboard">Scoreboard</option>
                <option value="Lower Thirds">Lower Thirds</option>
                <option value="Transitions">Transitions</option>
              </select>
            </div>
            <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="priceRange">
              Price Range:
            </label>
            <input
              type="range"
              id="priceRange"
              min="0"
              max="1000"
              value={priceRange.min}
              onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange.max)}
              className="w-full"
            />
            <input
              type="range"
              id="priceRange"
              min="0"
              max="1000"
              value={priceRange.max}
              onChange={(e) => handlePriceChange(priceRange.min, parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between">
              <span className="text-white">{priceRange.min}</span>
              <span className="text-white">{priceRange.max}</span>
            </div>
          </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 13.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-brandBG p-4 col-span-3">
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="sortBy">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Price">Price (Low to High)</option>
              <option value="ReversePrice">Price (High to Low)</option>
              <option value="Alphabetical">Alphabetical</option>
              <option value="ReverseAlphabetical">Reverse Alphabetical</option>
            </select>
          </div>
          <div className="flex flex-wrap justify-around">
            {filteredProducts.map((product, index) => (
              <div key={index} className="flex flex-col items-center mb-4">
                <img src={product.image} alt={`Product ${index}`} className="w-32 h-auto rounded-lg" />
                <p className="mt-2 text-white">{product.name}</p>
                <p className="mt-2 text-white">${product.price}</p>
                <p className="mt-2 text-white">{product.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProductsPage;
