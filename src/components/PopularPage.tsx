import React, { useEffect, useState } from 'react';
import Product from './Product'; 

const PopularPage: React.FC = () => {
  const [popularProducts, setPopularProducts] = useState<any[]>([]);

  useEffect(() => {
    const storedPopular = localStorage.getItem('popularProducts');
    if (storedPopular) {
      setPopularProducts(JSON.parse(storedPopular));
    }
  }, []);

  const handleRemovePopular = (productId: string) => {
    const updatedPopular = popularProducts.filter(
      (product) => product.id !== productId
    );
    setPopularProducts(updatedPopular);
    localStorage.setItem('popularProducts', JSON.stringify(updatedPopular));
  };

  const groupedPopular: any[] = []; // Initialize the array correctly
  for (let i = 0; i < popularProducts.length; i += 4) {
    groupedPopular.push(popularProducts.slice(i, i + 4));
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl text-white font-bold mt-8 mb-4 text-center">
        {popularProducts.length > 0
          ? 'Popular Products'
          : 'There are no popular products at this time'}
      </h2>
      {popularProducts.length > 0 &&
        groupedPopular.map((group, index) => (
          <div key={index} className="w-full bg-[#1A323C] p-4 mb-8">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {group.map((product: any) => (
                <Product
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  imageUrl={product.imageUrl}
                  isFavorite={true}
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default PopularPage;

