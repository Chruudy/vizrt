import React from 'react';
import Image from 'next/image';
import googleIcon from '../images/google.png';
import airbnbIcon from '../images/airbnb.png';
import certificateIcon from '../images/certificate.png'; // Correct the import name
import certificateIcon2 from '../images/certificate2.png'; // Correct the import name

const ProfileExperience: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-end">
      <div className="w-full">
        <h3 className="text-xl font-bold text-center text-white">Experience</h3>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-center">
            <div className="relative w-8 h-8 mr-2"> {/* Increased size */}
              <Image 
                src={googleIcon}
                alt="Google" 
              />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">Google</p>
              <p className="text-sm text-black">UI/UX Designer - 3 years</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-center">
            <div className="relative w-8 h-8 mr-2"> {/* Increased size */}
              <Image 
                src={airbnbIcon}
                alt="Airbnb"/>
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">Airbnb</p>
              <p className="text-sm text-black">UI Intern - 6 months</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <h3 className="text-xl font-bold text-center text-white">Certificates</h3>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-start">
            <div className="relative w-8 h-8 mr-2"> {/* Increased size */}
              <Image 
                src={certificateIcon}
                alt="Certificate Icon" // Alt text for accessibility
              />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">Viz Trio Operator</p>
              <p className="text-sm text-black">
                <span className="block">Level: Expert</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-start">
            <div className="relative w-12 h-12 mr-2"> {/* Further increased size for the last box */}
              <Image 
                src={certificateIcon2}
                alt="Certificate Icon" // Alt text for accessibility
              />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">TriCaster Vectar Operator</p>
              <p className="text-sm text-black">Level: Intermediate to Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileExperience;
