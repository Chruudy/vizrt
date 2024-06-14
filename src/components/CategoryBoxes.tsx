import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';

// Define a type for the products to ensure type safety
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string; // Assume the image is a base64-encoded string
};

const FAVORITES_KEY = 'favoriteProducts';

const getFavoritesFromLocalStorage = (): number[] => {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoriteToLocalStorage = (productId: number) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

const removeFavoriteFromLocalStorage = (productId: number) => {
  let favorites = getFavoritesFromLocalStorage();
  favorites = favorites.filter(id => id !== productId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
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
      <div className="bg-grey085 bg-opacity-95 p-6 shadow-lg w-96 text-center text-blue-100">
        <div className="relative w-full h-48 mb-4">
          <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="w-full h-full object-cover" />
          {showMessage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-green-500 text-lg font-bold">
              Added to cart!
            </div>
          )}
        </div>
        <p>Description: {item.name}</p>
        <p>Category: {item.category}</p>
        <p>Price: ${item.price}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={addToCart}>Add to Cart</button>
          <button className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={onClose}>Close</button>
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
  const [showMessage, setShowMessage] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<number[]>(getFavoritesFromLocalStorage());

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
    const productToAdd = {
      ...item,
      image: item.image.replace('data:image/jpeg;base64,', ''),
    };
    const isAlreadyInCart = existingCart.some((product: Product) => product.id === item.id);

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

  const handleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      removeFavoriteFromLocalStorage(productId);
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      saveFavoriteToLocalStorage(productId);
      setFavorites([...favorites, productId]);
    }
  };

  const renderProducts = (products: Product[]) => (
    <div className="flex flex-wrap -mx-2">
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-2 mb-4">
          <div className="w-full rounded-lg overflow-hidden shadow-lg p-4 bg-[#1D3641] text-white h-80 flex flex-col"> {/* Ensure full height */}
            <div className="relative mb-2 h-48">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center mb-2">
                <p className="text-lg font-semibold">{product.name}</p>
                <button onClick={() => handleFavorite(product.id)}>
                  <StarIcon className={favorites.includes(product.id) ? "text-yellow-500" : "text-grey035"} />
                </button>
              </div>
              <p className="text-sm text-grey035 whitespace-nowrap">Category: {product.category}</p>
              <p className="text-md text-grey035 whitespace-nowrap">Price: ${product.price}</p>
            </div>
            <div className="flex justify-between space-x-2 mt-2">
              <button
                className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200"
                onClick={() => handleQuickReview(product)}
              >
                Quick Review
              </button>
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
      {showMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          {showMessage}
        </div>
      )}
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
