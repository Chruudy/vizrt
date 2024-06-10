import React from 'react';
import Image from 'next/image';

const ProfileExperience: React.FC = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold text-center text-white">Experience</h3>
      <div className="flex flex-col items-center mt-4 space-y-4">
        <div className="bg-white shadow-md rounded p-3 w-1/2 max-w-xs flex items-center"> {/* Adjusted width and padding */}
          <Image src="/images/google.png" alt="Google" width={24} height={24} className="mr-2" />
          <div>
            <p className="text-black">Google</p>
            <p className="text-sm text-black">UI/UX Designer - 3 years</p> {/* Smaller text */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded p-3 w-1/2 max-w-xs flex items-center"> {/* Adjusted width and padding */}
          <Image src="/images/airbnb.png" alt="Airbnb" width={24} height={24} className="mr-2" />
          <div>
            <p className="text-black">Airbnb</p>
            <p className="text-sm text-black">UI Intern - 6 months</p> {/* Smaller text */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileExperience;
