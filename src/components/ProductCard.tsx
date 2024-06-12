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

const ProductCard: React.FC<ProductCardProps> = ({ product, onDemo, addToCart }) => {
  const [isFavorite, setIsFavorite] = useState(false);

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
        <hr className="my-2 border-t border-gray-300" /> {/* Line above the buttons */}
        <div className="flex justify-between">
          <button onClick={onDemo} className="text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2">
            Demo
          </button>
          <button onClick={() => addToCart(product)} className="text-xs font-medium w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
