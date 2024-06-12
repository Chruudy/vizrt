import React, { useState } from 'react';

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Owned');

  const images = {
    Owned: [
      '/images/owned1.jpg',
      '/images/owned2.jpg',
      '/images/owned3.jpg',
    ],
    Wishlist: [
      '/images/wishlist1.jpg',
      '/images/wishlist2.jpg',
      '/images/wishlist3.jpg',
    ],
    Projects: [
      '/images/projects1.jpg',
      '/images/projects2.jpg',
      '/images/projects3.jpg',
    ],
  };

  return (
    <div className="text-center w-full">
      <div className="border-t border-white w-full mt-8" />
      <div className="flex justify-start mt-16 ml-4">
        {['Owned', 'Wishlist', 'Projects'].map((tab) => (
          <button
            key={tab}
            className={`mx-2 py-2 px-4 rounded-lg text-black ${activeTab === tab ? 'bg-orange-500 shadow-lg transform scale-105 rounded-full' : 'bg-gray-200 rounded'}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        {images[activeTab].map((src, index) => (
          <img key={index} src={src} alt={activeTab} className="w-32 h-32 object-cover rounded-lg shadow-md" />
        ))}
      </div>
    </div>
  );
};

export default Tabs;
