import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import { Product } from "../components/ProductCard"; // Assuming the Product type is exported from ProductCard

const CarouselItems = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
  const fetchAllImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5065/api/Product");
      // Shuffle array and select the first 10 products
      const shuffledProducts = response.data
        .sort(() => 0.5 - Math.random())
        .slice(0, 9);
      const productsWithBase64Images = shuffledProducts.map((product: Product) => {
        const base64Image = `data:image/jpeg;base64,${product.image}`;
        return base64Image;
      });

      setImages(productsWithBase64Images);
    } catch (err) {
      console.error("Error fetching images:", err);
      setError("Error fetching images");
    } finally {
      setLoading(false);
    }
  };

  fetchAllImages();
}, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  return <Carousel images={images} />;
};

export default CarouselItems;