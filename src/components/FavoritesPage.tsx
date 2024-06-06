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

  const groupedFavorites = [];
  for (let i = 0; i < favoriteProducts.length; i += 4) {
    groupedFavorites.push(favoriteProducts.slice(i, i + 4));
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl text-white font-bold mt-8 mb-4 text-center">
        {favoriteProducts.length > 0 ? 'Your Favorites' : 'You have no favorites yet'}
      </h2>
      {favoriteProducts.length > 0 && (
        groupedFavorites.map((group, index) => (
          <div key={index} className="w-full bg-[#1A323C] p-4 mb-8">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {group.map((product) => (
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
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesPage;
