import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star"; // Import the star icon

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

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<string[]>(getFavoritesFromLocalStorage());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5065/api/Product");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFavorite = (productId: string) => {
    if (favorites.includes(productId)) {
      removeFavoriteFromLocalStorage(productId);
      setFavorites(favorites.filter(id => id !== productId));
    } else {
      saveFavoriteToLocalStorage(productId);
      setFavorites([...favorites, productId]);
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-4">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-5">Product List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <div className="mb-4">
              <Image
                src={`data:image/jpeg;base64,${product.image}`}
                alt={product.name}
                width={200}
                height={200}
                layout="responsive"
                unoptimized={true}
                className="rounded-md"
              />
            </div>
            <h3 className="text-lg font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-2">Category: {product.category}</p>
            <p className="text-gray-700 mb-2">Price: ${product.price}</p>
            <button onClick={() => handleFavorite(product.id)}>
              {favorites.includes(product.id) ? (
                <StarIcon className="text-yellow-500" />
              ) : (
                <StarIcon className="text-gray-400" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
