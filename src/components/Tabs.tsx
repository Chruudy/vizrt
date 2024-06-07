// components/Tabs.tsx
import React from 'react';

const Tabs: React.FC = () => {
  return (
    <div className="flex justify-center mt-8">
      <button className="mx-2 py-2 px-4 bg-gray-200 rounded">Owned</button>
      <button className="mx-2 py-2 px-4 bg-gray-200 rounded">Wishlist</button>
      <button className="mx-2 py-2 px-4 bg-gray-200 rounded">Projects</button>
    </div>
  );
};

export default Tabs;
