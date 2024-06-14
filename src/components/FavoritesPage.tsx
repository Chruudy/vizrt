import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard, { Product } from './ProductCard';

const FAVORITES_KEY = 'favoriteProducts';

const getFavoritesFromLocalStorage = (): string[] => {
  if (typeof window === 'undefined') return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

const FavoritesPage: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [showMessage, setShowMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchFavoriteProducts = async () => {
      try {
        const favoriteIds = getFavoritesFromLocalStorage();
        if (favoriteIds.length > 0) {
          const responses = await Promise.all(
            favoriteIds.map((id) => axios.get<Product>(`http://localhost:5065/api/Product/${id}`))
          );
          const favoriteProductsWithBase64Images = responses.map(response => {
            const product = response.data;
            return { ...product, image: `data:image/jpeg;base64,${product.image}` };
          });
          setFavoriteProducts(favoriteProductsWithBase64Images);
        }
        setLoading(false);
      } catch (err) {
        setError("Error fetching favorite products");
        setLoading(false);
      }
    };

    fetchFavoriteProducts();
  }, []);

 

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
    }

    setTimeout(() => setShowMessage(null), 3000);
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center text-red01 py-4">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 shadow-md rounded-md text-white">
      {showMessage && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          {showMessage}
        </div>
      )}
      <h2 className="text-2xl font-bold mb-5">Your Favorites</h2>
      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favoriteProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />
          ))}
        </div>
      ) : (
        <div className="text-center py-4">You have no favorites yet</div>
      )}
    </div>
  );
};

export default FavoritesPage;
