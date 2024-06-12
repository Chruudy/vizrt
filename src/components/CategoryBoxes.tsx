import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Define a type for the products to ensure type safety
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string; // Assume the image is a base64-encoded string
};

const QuickReviewModal = ({ item, onClose }: { item: Product, onClose: () => void }) => {
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { id: item.id, name: item.name, category: item.category, price: item.price, image: item.image };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-700 bg-opacity-95 p-6 shadow-lg w-96 text-center text-blue-100">
        <div className="relative w-full h-48 mb-4">
          <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="w-full h-full object-cover" />
          {showMessage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
              Added to cart!
            </div>
          )}
        </div>
        <p>Description: {item.name}</p>
        <p>Category: {item.category}</p>
        <p>Price: ${item.price}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={addToCart}>Add to Cart</button>
          <button className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const CategoryBoxes = () => {
  const [latestContributions, setLatestContributions] = useState<Product[]>([]);
  const [mostPopularPackages, setMostPopularPackages] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [quickReviewItem, setQuickReviewItem] = useState<Product | null>(null);
  const [showMessage, setShowMessage] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5065/api/Product");
        const productsWithBase64Images: Product[] = response.data.map((product: any) => ({
          ...product,
          image: `data:image/jpeg;base64,${product.image}`,
        }));

        // For simplicity, split products into two categories for demonstration
        const sportProducts = productsWithBase64Images.filter(product => product.category === "Sport");

        // Divide the products into two lists for the two rows
        setLatestContributions(sportProducts.slice(0, 5));
        setMostPopularPackages(sportProducts.slice(5, 10));
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleQuickReview = (item: Product) => setQuickReviewItem(item);
  const handleCloseQuickReview = () => setQuickReviewItem(null);

  const addToCart = (item: Product) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { id: item.id, name: item.name, category: item.category, price: item.price, image: item.image };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
    setShowMessage({ ...showMessage, [item.id]: true });
    setTimeout(() => {
      setShowMessage({ ...showMessage, [item.id]: false });
    }, 2000);
  };

  const renderProducts = (products: Product[]) => (
    <div className="flex flex-wrap -mx-2">
      {products.map((product) => (
        <div key={product.id} className="w-1/5 px-2 mb-4">
          <div className="w-full rounded-lg overflow-hidden shadow-lg p-4 bg-[#1D3641] text-white">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              {showMessage[product.id] && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-bold">
                  Added to cart!
                </div>
              )}
            </div>
            <div className="p-2">
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-sm">{product.category}</p>
              <p className="text-md font-bold">${product.price}</p>
              <div className="flex justify-between space-x-2 mt-2">
                <button
                  className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2"
                  onClick={() => handleQuickReview(product)}
                >
                  Demo
                </button>
                <button
                  className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-5 mt-16 bg-[#1D3641]">
      <div className="text-white text-2xl mb-4">Latest Contributions</div>
      {latestContributions.length === 0 ? (
        <div className="text-center text-white">
          <p>No latest contributions available at the moment.</p>
        </div>
      ) : (
        renderProducts(latestContributions)
      )}

      <div className="text-white text-2xl mt-8 mb-4">Most Popular Packages</div>
      {mostPopularPackages.length === 0 ? (
        <div className="text-center text-white">
          <p>No popular packages available at the moment.</p>
        </div>
      ) : (
        renderProducts(mostPopularPackages)
      )}
      {quickReviewItem && <QuickReviewModal item={quickReviewItem} onClose={handleCloseQuickReview} />}
    </div>
  );
};

export default CategoryBoxes;
