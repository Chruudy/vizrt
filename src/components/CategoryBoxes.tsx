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
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$60' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$70' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$80' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$90' },
  { src: sportArray[1], alt: 'Graphic 2', description: 'Basketball game', category: 'Sports', price: '$100' },
];

const images2 = [
  { src: sportArray[2], alt: 'Contribution 1', description: 'Contribution 1 description', category: 'Contributions', price: '$10' },
  { src: sportArray[3], alt: 'Contribution 2', description: 'Contribution 2 description', category: 'Contributions', price: '$20' },
  { src: sportArray[2], alt: 'Contribution 3', description: 'Contribution 3 description', category: 'Contributions', price: '$30' },
  { src: sportArray[2], alt: 'Contribution 4', description: 'Contribution 4 description', category: 'Contributions', price: '$40' },
  { src: sportArray[3], alt: 'Contribution 5', description: 'Contribution 5 description', category: 'Contributions', price: '$50' },
  { src: sportArray[3], alt: 'Contribution 6', description: 'Contribution 6 description', category: 'Contributions', price: '$60' },
  { src: sportArray[3], alt: 'Contribution 7', description: 'Contribution 7 description', category: 'Contributions', price: '$70' },
  { src: sportArray[2], alt: 'Contribution 8', description: 'Contribution 8 description', category: 'Contributions', price: '$80' },
  { src: sportArray[3], alt: 'Contribution 9', description: 'Contribution 9 description', category: 'Contributions', price: '$90' },
  { src: sportArray[2], alt: 'Contribution 10', description: 'Contribution 10 description', category: 'Contributions', price: '$100' },
];


const GridItem = ({ src, alt, description, category, price, onQuickReview }: any) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { src, alt, description, category, price };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
  };

  return (
    <div className="flex flex-col justify-between items-center bg-transparent p-2 focus:outline-none w-48 h-72 m-2 relative border-2 border-white border-opacity-25">
      <Image src={src} alt={alt} layout="responsive" width={192} height={128} className="w-full h-32 object-cover border-2 border-white border-opacity-25" />
      <div className="mt-2 text-sm text-center text-white">
        <p>Description: {description}</p>
        <p>Category: {category}</p>
        <p>Price: {price}</p>
      </div>
      <button className="text-xs font-medium text-white w-24 h-8 flex items-center justify-center bg-gradient-to-r from-brandOrange to-red03 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={onQuickReview}>
        Quick Review
      </button>
      <button className="text-xs font-medium text-white w-24 h-8 flex items-center justify-center bg-gradient-to-r from-brandOrange to-red03 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
};

const QuickReviewModal = ({ item, onClose }: any) => {
  const addToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { src: item.src, alt: item.alt, description: item.description, category: item.category, price: item.price };
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
          <button className="text-white bg-brandOrange px-4 py-2 rounded-md" onClick={addToCart}>Add to Cart</button>
          <button className="text-white bg-brandOrange px-4 py-2 rounded-md" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ title, images, link }: any) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [quickReviewItem, setQuickReviewItem] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  const handlePrev = () => setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  const handleNext = () => setSlideIndex((prevIndex) => Math.min(prevIndex + 1, 1));

  const handleQuickReview = (item: any) => setQuickReviewItem(item);
  const handleCloseQuickReview = () => setQuickReviewItem(null);

  const handleAddToCart = (item: any) => {
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const newItem = { src: item.src, alt: item.alt, description: item.description, category: item.category, price: item.price };
    localStorage.setItem('cart', JSON.stringify([...existingCart, newItem]));
    console.log('Added to cart');
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <div className="relative mb-10 bg-gray-700 bg-opacity-50 p-4">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold text-white mr-2">{title}</h2>
        <button className="text-xl font-semibold text-white bg-brandOrange rounded-full p-2" onClick={() => window.location.href = link}>
          {">"}
        </button>
      </div>
      <div className="overflow-hidden" style={{ maxWidth: 'calc(6 * 12rem)' }}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          <div className="flex">
            {images.slice(0, 6).map((image: any, index: any): any => (
              <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} onQuickReview={() => handleQuickReview(image)} />
            ))}
          </div>
          <div className="flex">
            {images.slice(6, 12).map((image: any, index: any) => (
              <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} onQuickReview={() => handleQuickReview(image)} />
            ))}
          </div>
        </div>
      </div>
      {slideIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-brandOrange text-white rounded-full -ml-8"
        >
          {"<"}
        </button>
      )}
      {slideIndex < 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-brandOrange text-white rounded-full -mr-8"
        >
          {">"}
        </button>
      )}
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
