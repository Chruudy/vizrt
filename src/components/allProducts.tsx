import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard, { Product } from "../components/ProductCard";

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("Show-all");
  const [sortBy, setSortBy] = useState("LastPublished");
  const [selectedType, setSelectedType] = useState("All");
  const [highestPrice, setHighestPrice] = useState<number>(0);
  const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 0 });
  const [showMessage, setShowMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5065/api/Product");
        const productsWithBase64Images = response.data.map((product: Product) => {
          const base64Image = `data:image/jpeg;base64,${product.image}`;
          return { ...product, image: base64Image };
        });

        setProducts(productsWithBase64Images);
        setLoading(false);

        // Calculate and set the highest price
        const maxPrice = Math.max(...productsWithBase64Images.map((product: any) => product.price));
        setHighestPrice(maxPrice);
        setPriceRange({ min: 0, max: maxPrice }); // Set initial price range
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
          return b.price - a.price;
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

  const handleDemo = () => {
    // Handle demo functionality here
  };

  const handleAddToCart = (product: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productToAdd = {
      ...product,
      image: product.image.replace('data:image/jpeg;base64,', ''),
    };
    const isAlreadyInCart = existingCart.some((item: Product) => item.id === product.id);

    if (isAlreadyInCart) {
      setShowMessage("Item is already in cart");
    } else {
      localStorage.setItem('cart', JSON.stringify([...existingCart, productToAdd]));
      setShowMessage("Added to cart");

      // Trigger storage event to update cart count
      window.dispatchEvent(new Event('storage'));
    }

    setTimeout(() => setShowMessage(null), 3000); // Hide the message after 3 seconds
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="overflow-x-hidden">
      {showMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          {showMessage}
        </div>
      )}
      <div className="grid grid-cols-12">
        <div className="bg-brandBGLighter h-full p-4 col-span-2">
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
                max={highestPrice}
                value={priceRange.min}
                onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange.max)}
                className="w-full"
              />
              <input
                type="range"
                id="priceRange"
                min="0"
                max={highestPrice}
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
        <div className="bg-brandBG p-4 col-span-10">
          <div className="mb-4">
            <label className="block text-white font-bold mb-2" htmlFor="sortBy">
              Sort By:
            </label>
            <select
              id="sortBy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="block appearance-none w-100 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option value="Price">Price (Low to High)</option>
              <option value="ReversePrice">Price (High to Low)</option>
              <option value="Alphabetical">Alphabetical (Ascending)</option>
              <option value="ReverseAlphabetical">Alphabetical (Descending)</option>
            </select>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product: Product) => (
              <ProductCard
                key={product.id}
                product={product}
                onDemo={handleDemo}
                addToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
