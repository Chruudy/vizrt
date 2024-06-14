import React from "react";
import Image from "next/image";
import googleIcon from "../images/google.png";
import airbnbIcon from "../images/airbnb.png";
import certificateIcon from "../images/certificate.png";
import certificateIcon2 from "../images/certificate2.png";

// This is the ProfileExperience component that displays the user's experience and certificates
const ProfileExperience: React.FC = () => {
  return (
    <div className="mt-8 flex flex-col items-end">
      <div className="w-full">
        <h3 className="text-xl font-bold text-center text-white">Experience</h3>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-center">
            <div className="relative w-8 h-8 mr-2">
              <Image src={googleIcon} alt="Google" />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">Google</p>
              <p className="text-sm text-black">UI/UX Designer - 3 years</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-center">
            <div className="relative w-8 h-8 mr-2">
              <Image src={airbnbIcon} alt="Airbnb" />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">Airbnb</p>
              <p className="text-sm text-black">UI Intern - 6 months</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <h3 className="text-xl font-bold text-center text-white">
          Certificates
        </h3>
        <div className="flex flex-col items-center mt-4 space-y-4">
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-start">
            <div className="relative w-8 h-8 mr-2">
              <Image src={certificateIcon} alt="Certificate Icon" />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">Viz Trio Operator</p>
              <p className="text-sm text-black">
                <span className="block">Level: Expert</span>
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded p-3 w-64 max-w-xs flex items-start">
            <div className="relative w-12 h-12 mr-2">
              <Image src={certificateIcon2} alt="Certificate Icon" />
            </div>
            <div className="ml-2 text-black">
              <p className="font-bold text-black">TriCaster Vectar Operator</p>
              <p className="text-sm text-black">
                Level: Intermediate to Expert
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileExperience;
