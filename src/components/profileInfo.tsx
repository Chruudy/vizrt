"use client";
import React from 'react';
import Image from 'next/image';
import profilePic from '../images/profilepic.jpeg'; 

const ProfileInfo: React.FC = () => {
  return (
    <div className="text-center mt-8">
      <div className="relative flex items-center justify-center h-32 w-32 rounded-full overflow-hidden bg-gray-200 mx-auto border-4 border-white shadow-lg">
        <div className="absolute inset-0 border-4 border-white rounded-full"></div>
        <Image src={profilePic} alt="Profile Picture" layout="fill" objectFit="cover" />
        <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border-2 border-gray-300">
          <button className="bg-gray-800 text-white rounded-full p-1">+</button>
        </div>
      </div>
      <h2 className="text-2xl font-bold mt-4">Nick Frost</h2>
      <p className="text-gray-500">Product Designer</p>
      <p className="text-gray-500">San Francisco</p>
    </div>
  );
};

export default ProfileInfo;
