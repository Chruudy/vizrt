import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Definer en type for produktene for å sikre typesikkerhet
type Product = {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string; // Antar at bildet er en base64-kodet streng
};

const CategoryBoxes = () => {
  const [latestContributions, setLatestContributions] = useState<Product[]>([]);
  const [mostPopularPackages, setMostPopularPackages] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5065/api/Product");
        const productsWithBase64Images: Product[] = response.data.map((product: any) => ({
          ...product,
          image: `data:image/jpeg;base64,${product.image}`,
        }));

        // For enkelhetens skyld, splitt produktene i to kategorier for demonstrasjon
        const sportProducts = productsWithBase64Images.filter(product => product.category === "Sport");

        // Del opp produktene i to lister for de to lysbildefremvisningene
        setLatestContributions(sportProducts.slice(0, 5));
        setMostPopularPackages(sportProducts.slice(5, 10));
      } catch (err) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const renderProducts = (products: Product[]) => (
    <div className="flex space-x-4 overflow-x-auto py-4">
      {products.map((product) => (
        <div key={product.id} className="flex-shrink-0 w-64 border border-gray-200 rounded-lg overflow-hidden shadow-lg p-4 bg-white">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-2">
            <p className="text-lg font-semibold">{product.name}</p>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-md font-bold">${product.price}</p>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="p-5 mt-16 bg-[#1D3641]">
      <div className="text-white text-2xl mb-4">Latest Contributions</div>
      {latestContributions.length === 0 ? (
        <div className="text-center text-white">
          <p>No latest contributions available at the moment.</p>
        </div>
      ) : (
        renderProducts(latestContributions)
      )}

      <div className="text-white text-2xl mt-8 mb-4">Most Popular Packages</div>
      {mostPopularPackages.length === 0 ? (
        <div className="text-center text-white">
          <p>No popular packages available at the moment.</p>
        </div>
      ) : (
        renderProducts(mostPopularPackages)
      )}
    </div>
  );
};

export default CategoryBoxes;
