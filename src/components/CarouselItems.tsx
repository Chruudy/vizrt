import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "./Carousel";
import { Product } from "../components/ProductCard";

//This is the component that fetches the images from the API and passes them to the Carousel component
const CarouselItems = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //This is the useEffect hook that fetches the images from the API
  useEffect(() => {
    const fetchAllImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:5065/api/Product");
        const shuffledProducts = response.data
          .sort(() => 0.5 - Math.random())
          .slice(0, 9);
        const productsWithBase64Images = shuffledProducts.map(
          (product: Product) => {
            const base64Image = `data:image/jpeg;base64,${product.image}`;
            return base64Image;
          }
        );

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
