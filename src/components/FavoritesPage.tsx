import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import StarIcon from "@mui/icons-material/Star"; // Import the star icon

interface Product {
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

const FavoritesPage: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const favoriteIds = getFavoritesFromLocalStorage();
        if (favoriteIds.length > 0) {
          const responses = await Promise.all(
            favoriteIds.map((id) => axios.get<Product>(`http://localhost:5065/api/Product/${id}`))
          );
          setFavoriteProducts(responses.map(response => response.data));
        }
        setLoading(false);
      } catch (err) {
        setError("Error fetching favorite products");
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, []);

  const handleFavorite = (productId: string) => {
    removeFavoriteFromLocalStorage(productId);
    setFavoriteProducts(favoriteProducts.filter(product => product.id !== productId));
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red01 py-4">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 shadow-md rounded-md">
      <h2 className="text-2xl text-white font-bold mb-5">Your Favorites</h2>
      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product) => (
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
                <StarIcon className="text-yellow-500" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-white py-4">You have no favorites yet</div>
      )}
    </div>
  );
};

export default FavoritesPage;
