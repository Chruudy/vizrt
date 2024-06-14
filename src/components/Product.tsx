import React, { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import Link from "next/link";

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
  onRemoveFavorite,
}) => {
  const [isProductFavorite, setIsProductFavorite] = useState(isFavorite);

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteProducts');
    if (storedFavorites) {
      const favorites = JSON.parse(storedFavorites);
      setIsProductFavorite(favorites.some((product: any) => product.id === id));
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
    if (onRemoveFavorite && isProductFavorite) {
      onRemoveFavorite();
    }
  };

  return (
    <div className="p-4 rounded-md flex flex-col justify-between mb-8" style={{ color: '#ffffff' }}>
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
      <p className="text-sm text-grey010 mb-2">{description}</p>
      <p className="text-sm font-semibold">${price}</p>
      <button className="mt-4 text-base font-medium text-white w-full h-10 flex items-center justify-center rounded-md bg-gradient-to-r from-brandOrange to-brandOrangeDarker shadow-lg transform hover:scale-105 transition-transform duration-200">
        View Product
      </button>
      <Link href="/popular">
            <button className="transition-colors duration-400 ease-in-out hover:bg-brandOrange hover:text-black h-20 w-20">
              <StarIcon />
            </button>
          </Link>

    </div>
  );
};

export default Product;
