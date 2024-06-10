"use client";
import React from 'react';
import Image from 'next/image';

import profilePic from '../images/profilepic.jpeg'; // Adjust the import path as needed

const ProfileInfo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="relative flex-shrink-0 h-32 w-32 rounded-full overflow-hidden shadow-lg">
        <Image
          src={profilePic}
          alt="Profile Picture"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div>
        <h2 className="font-bold text-white">Nicole Frost</h2>
        <p className="font-bold text-white">Product Designer</p>
        <p className="font-bold text-white">San Francisco</p>
        <div className="flex space-x-4 mt-2 text-white">
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
