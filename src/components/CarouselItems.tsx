"use client";
import React, { useEffect, useState } from 'react';
import Carousel from './Carousel';
import axios from 'axios';

const CarouselItems = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5065/api/Product/images')
      .then(response => {
        console.log(response.data); // Log the Base64 strings to check if they are correct
        setImages(response.data);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return <Carousel images={images} />;
};

export default CarouselItems;
