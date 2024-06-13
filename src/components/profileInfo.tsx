import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../images/profilepic.jpeg'; // Ensure this is the correct path

const ProfileInfo: React.FC = () => {
  return (
    <div className="flex flex-col items-center md:flex-row md:items-start space-x-4">
      <div className="relative flex-shrink-0 h-32 w-32 rounded-full overflow-hidden shadow-lg">
        <Image
          src={profilePic}
          alt="Profile Picture"
          layout="fill"
          objectFit='cover'
          className="rounded-full"
        />
      </div>
      <div className="mt-4 md:mt-0">
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
        <div className="flex space-x-2 mt-2"> {/* Tighter space between buttons */}
          <button className="text-xs px-2 py-1 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-200">
            Change Profile Picture
          </button>
          <button className="text-xs px-2 py-1 text-white bg-orange-500 rounded-full hover:bg-orange-600 transition duration-200">
            Edit Account
          </button>
        </div>
        <div className="mt-2"> {/* Container for the Verify button */}
          <Link href="/Verify" passHref>
            <button className="text-sm px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-200">
              Verify
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
