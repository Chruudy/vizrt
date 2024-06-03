import React, { useEffect, useState } from 'react';
import Product from './Product';

const FavoritesPage: React.FC = () => {
  const [favoriteProducts, setFavoriteProducts] = useState<any[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteProducts');
    if (storedFavorites) {
      setFavoriteProducts(JSON.parse(storedFavorites));
    }
  }, []);

  const handleRemoveFavorite = (productId: string) => {
    const updatedFavorites = favoriteProducts.filter(
      (product) => product.id !== productId
    );
    setFavoriteProducts(updatedFavorites);
    localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="max-w-screen-xl mx-auto px-8">
      <h2 className="text-2xl text-white font-bold mt-8 mb-4">
        {favoriteProducts.length > 0 ? 'Your Favorites' : 'You have no favorites yet'}
      </h2>
      {favoriteProducts.length > 0 ? (
        <div className="grid grid-cols-3 gap-8">
          {favoriteProducts.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              isFavorite={true}
              onRemoveFavorite={() => handleRemoveFavorite(product.id)}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default FavoritesPage;