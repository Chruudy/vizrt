import { useState, useEffect } from "react";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
}

const FAVORITES_KEY = 'favoriteProducts';

const getFavoritesFromLocalStorage = (): string[] => {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoriteToLocalStorage = (productId: string) => {
  const favorites = getFavoritesFromLocalStorage();
  if (!favorites.includes(productId)) {
    favorites.push(productId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

const removeFavoriteFromLocalStorage = (productId: string) => {
  let favorites = getFavoritesFromLocalStorage();
  favorites = favorites.filter(id => id !== productId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};

interface ProductCardProps {
  product: Product;
  onDemo: () => void;
  addToCart: (product: Product) => void;
}

const QuickReviewModal = ({ product, onClose }: { product: Product; onClose: () => void }) => {
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { id: product.id, name: product.name, category: product.category, price: product.price, image: product.image };
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
          <Image src={product.image} alt={product.name} layout="fill" objectFit="cover" className="w-full h-full object-cover" />
          {showMessage && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-green-500 text-lg font-bold">
              Added to cart!
            </div>
          )}
        </div>
        <p>Description: {product.name}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={addToCart}>Add to Cart</button>
          <button className="text-white text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onDemo, addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quickReviewOpen, setQuickReviewOpen] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesFromLocalStorage();
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteFromLocalStorage(product.id);
    } else {
      saveFavoriteToLocalStorage(product.id);
    }
    setIsFavorite(!isFavorite);
  };

  const handleQuickReview = () => {
    setQuickReviewOpen(true);
  };

  const handleCloseQuickReview = () => {
    setQuickReviewOpen(false);
  };

  return (
    <div className="text-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out relative overflow-hidden">
      <div className="relative w-full h-36">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-bold w-full">{product.name}</h3>
          <button onClick={handleFavorite} className="ml-2">
            <StarIcon className={isFavorite ? "text-yellow-500" : "text-gray-400"} />
          </button>
        </div>
        <p className="text-gray-400 mb-2 w-full">Category: {product.category}</p>
        <p className="text-gray-400 mb-2 w-full">Price: ${product.price}</p>
        <hr className="my-2 border-t border-gray-300" /> 
        <div className="flex justify-between">
          
        <button onClick={() => addToCart(product)} className="text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2">
            Add to Cart
          </button>
          <button onClick={handleQuickReview} className="text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2">
            Quick review
          </button>
        </div>
      </div>
      {quickReviewOpen && <QuickReviewModal product={product} onClose={handleCloseQuickReview} />}
    </div>
  );
};

export default ProductCard;
