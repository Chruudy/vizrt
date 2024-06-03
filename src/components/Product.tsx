import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';

interface ProductProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isFavorite?: boolean;
  onRemoveFavorite?: () => void;
}

const Product: React.FC<ProductProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  isFavorite = false,
  onRemoveFavorite = () => {}
}) => {
  const [isProductFavorite, setIsProductFavorite] = useState(isFavorite);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteProducts');
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setIsProductFavorite(parsedFavorites.some((product: any) => product.id === id));
    }
  }, [id]);

  const handleToggleFavorite = () => {
    setIsProductFavorite(!isProductFavorite);
    const storedFavorites = localStorage.getItem('favoriteProducts');
    let updatedFavorites = [];
    if (storedFavorites) {
      updatedFavorites = JSON.parse(storedFavorites);
    }
    if (isProductFavorite) {
      updatedFavorites = updatedFavorites.filter((product: any) => product.id !== id);
    } else {
      updatedFavorites.push({ id, name, description, price, imageUrl });
    }
    localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
  };

  return (
<div className="p-4 rounded-md shadow-md flex flex-col justify-between mb-8" style={{ backgroundColor: '#212121', color: '#ffffff' }}>
  <img src={imageUrl} alt={name} className="mb-4" />
  <div className="flex items-center justify-between mb-2">
    <p className="font-semibold">{name}</p>
    <button onClick={handleToggleFavorite} className="ml-2">
      {isProductFavorite ? (
        <StarIcon sx={{ fontSize: 24, color: '#FFD700' }} />
      ) : (
        <StarIcon sx={{ fontSize: 24, color: 'gray' }} />
      )}
    </button>
  </div>
  <p className="text-sm text-gray-200 mb-2">{description}</p>
  <p className="text-sm font-semibold">${price}</p>
  <button className="mt-4 text-base font-medium text-white w-full h-10 flex items-center justify-center rounded-md bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200">
    View Product
  </button>
</div>


  );
};

export default Product;