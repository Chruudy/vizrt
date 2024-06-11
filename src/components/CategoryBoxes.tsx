import React, { useState } from 'react';
import Image from 'next/image';
import volleyball from '../images/volleyball.jpg';
import basketball from '../images/basketball.jpg';
import img1 from '../images/img1.jpg'; 
import img2 from '../images/img2.jpg';

const sportArray = [volleyball, basketball, img1, img2];

const images1 = [
  { src: sportArray[0], alt: 'Graphic 1', description: 'Volleyball game', category: 'Sports', price: '$49' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$99' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$30' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$40' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$50' },
];

const images2 = [
  { src: sportArray[2], alt: 'Contribution 1', description: 'Contribution 1 description', category: 'Contributions', price: '$10' },
  { src: sportArray[3], alt: 'Contribution 2', description: 'Contribution 2 description', category: 'Contributions', price: '$20' },
  { src: sportArray[2], alt: 'Contribution 3', description: 'Contribution 3 description', category: 'Contributions', price: '$30' },
  { src: sportArray[2], alt: 'Contribution 4', description: 'Contribution 4 description', category: 'Contributions', price: '$40' },
  { src: sportArray[3], alt: 'Contribution 5', description: 'Contribution 5 description', category: 'Contributions', price: '$50' },
];

const GridItem = ({ src, alt, description, category, price, onQuickReview }) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { src, alt, description, category, price: price.toString() };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
  };

  return (
    <div className="flex flex-col justify-between items-center bg-transparent p-2 focus:outline-none w-full h-72 m-2 relative border-2 border-white border-opacity-25">
      <Image src={src} alt={alt} layout="responsive" width={192} height={128} className="w-full h-32 object-cover border-2 border-white border-opacity-25" />
      <div className="mt-2 text-sm text-center text-white">
        <p>Description: {description}</p>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
      </div>
      <button className="text-xs font-medium text-white w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={onQuickReview}>
        Quick Review
      </button>
      <button className="text-xs font-medium text-white w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const QuickReviewModal = ({ item, onClose }) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { src: item.src, alt: item.alt, description: item.description, category: item.category, price: item.price.toString() };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-700 bg-opacity-95 p-6 shadow-lg w-96 text-center text-blue-100">
        <Image src={item.src} alt={item.alt} layout="responsive" width={384} height={192} className="w-full h-48 object-cover mb-4 border-2 border-white border-opacity-25" />
        <p>Description: {item.description}</p>
        <p>Category: {item.category}</p>
        <p>Price: {item.price}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="text-white bg-orange-500 px-4 py-2 rounded-md" onClick={addToCart}>Add to Cart</button>
          <button className="text-white bg-orange-500 px-4 py-2 rounded-md" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, images, link }) => {
  const [quickReviewItem, setQuickReviewItem] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handleQuickReview = (item) => setQuickReviewItem(item);
  const handleCloseQuickReview = () => setQuickReviewItem(null);

  const handleAddToCart = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { src: item.src, alt: item.alt, description: item.description, category: item.category, price: item.price.toString() };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="relative mb-10 bg-gray-700 bg-opacity-50 p-4">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold text-white mr-2">{title}</h2>
        <button className="text-xl font-semibold text-white bg-orange-500 rounded-full p-2" onClick={() => window.location.href = link}>
          {">"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} onQuickReview={() => handleQuickReview(image)} />
        ))}
      </div>
      {quickReviewItem && <QuickReviewModal item={quickReviewItem} onClose={handleCloseQuickReview} />}
      {showMessage && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-green-500 text-white px-4 py-2 rounded shadow-lg">
            Added to cart!
          </div>
        </div>
      )}
    </div>
  );
};

const CategoryBoxes = () => {
  return (
    <div className="p-5 mt-16" style={{ backgroundColor: '#1D3641' }}>
      <CategorySection title="Most Popular Graphics" images={images1} link="/popular" />
      <CategorySection title="Latest Contributions" images={images2} link="/contributions" />
    </div>
  );
};

export default CategoryBoxes;
