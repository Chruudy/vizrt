import React, { useState } from 'react';
import volleyball from '../images/volleyball.jpg';
import basketball from '../images/basketball.jpg';
import img1 from '../images/img1.jpg'; 
import img2 from '../images/img2.jpg';

const sportArray = [volleyball, basketball, img1, img2].map((image) => image.src);

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

const GridItem = ({ src, alt, description, category, price, onQuickReview }: { src: string; alt: string; description: string; category: string; price: string; onQuickReview: () => void }) => (
  <div className="flex flex-col justify-between items-center bg-transparent p-2 focus:outline-none w-48 h-72 m-2 relative border-2 border-white border-opacity-25">
    <img src={src} alt={alt} className="w-full h-32 object-cover border-2 border-white border-opacity-25" />
    <div className="mt-2 text-sm text-center text-white">
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Price: {price}</p>
    </div>
    <button className="text-xs font-medium text-white w-24 h-8 flex items-center justify-center bg-gradient-to-r from-orange-400 to-orange-700 shadow-lg transform hover:scale-105 transition-transform duration-200 mt-2" onClick={onQuickReview}>
      Quick Review
    </button>
  </div>
);

const QuickReviewModal = ({ item, onClose }: { item: any; onClose: () => void }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-gray-700 bg-opacity-95 p-6 shadow-lg w-96 text-center text-blue-100">
      <img src={item.src} alt={item.alt} className="w-full h-48 object-cover mb-4 border-2 border-white border-opacity-25" />
      <p>Description: {item.description}</p>
      <p>Category: {item.category}</p>
      <p>Price: {item.price}</p>
      <div className="flex justify-center space-x-4 mt-4">
        <button className="text-white bg-orange-500 px-4 py-2 rounded-md" onClick={() => console.log('Added to cart')}>Add to Cart</button>
        <button className="text-white bg-orange-500 px-4 py-2 rounded-md" onClick={onClose}>Close</button>
      </div>
    </div>
  </div>
);

const CategorySection = ({ title, images, link }: { title: string; images: { src: string; alt: string; description: string; category: string; price: string }[]; link: string }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [quickReviewItem, setQuickReviewItem] = useState<any>(null);

  const handlePrev = () => setSlideIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  const handleNext = () => setSlideIndex((prevIndex) => Math.min(prevIndex + 1, 1));

  const handleQuickReview = (item: any) => setQuickReviewItem(item);
  const handleCloseQuickReview = () => setQuickReviewItem(null);

  return (
    <div className="relative mb-10 bg-gray-700 bg-opacity-50 p-4">
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-semibold text-white mr-2">{title}</h2>
        <button className="text-xl font-semibold text-white bg-orange-500 rounded-full p-2" onClick={() => window.location.href = link}>
          {">"}
        </button>
      </div>
      <div className="overflow-hidden" style={{ maxWidth: 'calc(6 * 12rem)' }}>
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
          <div className="flex">
            {images.slice(0, 6).map((image, index) => (
              <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} onQuickReview={() => handleQuickReview(image)} />
            ))}
          </div>
          <div className="flex">
            {images.slice(6, 12).map((image, index) => (
              <GridItem key={index} src={image.src} alt={image.alt} description={image.description} category={image.category} price={image.price} onQuickReview={() => handleQuickReview(image)} />
            ))}
          </div>
        </div>
      </div>
      {slideIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full -ml-8"
        >
          {"<"}
        </button>
      )}
      {slideIndex < 1 && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-orange-500 text-white rounded-full -mr-8"
        >
          {">"}
        </button>
      )}
      {quickReviewItem && <QuickReviewModal item={quickReviewItem} onClose={handleCloseQuickReview} />}
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
