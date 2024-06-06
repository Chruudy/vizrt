"use client";
import React from 'react';import Image from 'next/image';

import profilePic from '../images/profilepic.jpeg'; // Adjust the import path as needed

const ProfileInfo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-shrink-0 h-32 w-32 rounded-full overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
        <div className="absolute inset-0 border-4 border-white rounded-full"></div>
        <Image src={profilePic} alt="Profile Picture" layout="fill" objectFit="cover" />
        <button 
          className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-gray-300 flex items-center justify-center w-8 h-8 text-gray-800 hover:bg-gray-300"
          onClick={() => alert('Upload image functionality will be here')}>
          <span className="text-xl font-bold">+</span>
        </button>
      </div>
      <div>
        <h2 className="text-2xl font-bold">Nicole Frost</h2>
        <p className="text-gray-500">Product Designer</p>
        <p className="text-black-500">San Francisco</p>
        <div className="flex space-x-4 mt-2">
          <div>
            <span className="font-bold">200</span> followers
          </div>
          <div>
            <span className="font-bold">100</span> following
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
