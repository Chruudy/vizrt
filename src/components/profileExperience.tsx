import React from 'react';
import Image from 'next/image'; 

const ProfileExperience: React.FC = () => {
  return (
    <div className="mt-8 flex justify-end">
      <div>
        <h3 className="text-xl font-bold text-center text-white">Experience</h3>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-center">
            <div className="relative w-6 h-6 mr-2"> 
              <Image 
                src="/images/google.png"
                alt="Google"
                layout="fill" 
                objectFit="cover" 
              />
            </div>
            <div className="ml-2 text-black">
              <p className="text-black">Google</p>
              <p className="text-sm text-black">UI/UX Designer - 3 years</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-center">
            <div className="relative w-6 h-6 mr-2"> 
              <Image 
                src="/images/airbnb.png"
                alt="Airbnb"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="ml-2 text-black">
              <p className="text-black">Airbnb</p>
              <p className="text-sm text-black">UI Intern - 6 months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileExperience;
