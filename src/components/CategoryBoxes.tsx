import React from 'react';

const CategoryBoxes = () => {
  return (
    <div className="p-5" style={{ backgroundColor: '#1D3641' }}>
      <div className="mb-10">
        <h2 className="mb-2 text-white">Text 1</h2>
        <div className="grid grid-cols-8 gap-5">
          {/* Repeat this div for each grid item */}
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic1.jpg" alt="Graphic 1" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic2.jpg" alt="Graphic 2" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic3.jpg" alt="Graphic 3" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic4.jpg" alt="Graphic 4" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic5.jpg" alt="Graphic 5" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic6.jpg" alt="Graphic 6" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic7.jpg" alt="Graphic 7" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/graphic8.jpg" alt="Graphic 8" className="w-full object-cover rounded-lg" />
          </div>
          {/* End of grid item */}
        </div>
      </div>
      <div className="mb-10">
        <h2 className="mb-2 text-white">Text 2</h2>
        <div className="grid grid-cols-8 gap-5">
          {/* Repeat this div for each grid item */}
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution1.jpg" alt="Contribution 1" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution2.jpg" alt="Contribution 2" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution3.jpg" alt="Contribution 3" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution4.jpg" alt="Contribution 4" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution5.jpg" alt="Contribution 5" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution6.jpg" alt="Contribution 6" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution7.jpg" alt="Contribution 7" className="w-full object-cover rounded-lg" />
          </div>
          <div className="flex justify-center items-center bg-gray-200 rounded-lg p-2">
            <img src="/path/to/contribution8.jpg" alt="Contribution 8" className="w-full object-cover rounded-lg" />
          </div>
          {/* End of grid item */}
        </div>
      </div>
    </div>
  );
};

export default CategoryBoxes;
