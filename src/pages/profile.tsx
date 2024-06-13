import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import ProfileInfo from '../components/profileInfo';
import ProfileExperience from '../components/profileExperience';
import Tabs from '../components/Tabs';

const Profile: React.FC = () => {
  return (
    <div className="overflow-x-hidden min-h-screen text-white">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-between items-start">
          <div className="w-1/3">
            <ProfileInfo />
            <div className="mt-8">
              <h3 className="text-xl font-bold text-white">Skills</h3>
              <div className="flex flex-wrap mt-2">
                {['JavaScript', 'React', 'CSS', 'HTML', 'Node.js', 'Figma'].map((skill) => (
                  <span key={skill}
                    className="bg-gray-700 text-white py-1 px-3 m-2 rounded-full cursor-pointer 
                                   hover:bg-gray-800 hover:text-gray-300 transition duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="w-2/3">
            <div className="text-right">
              <p className="text-xl font-bold">Estimated Earnings</p>
              <p className="text-3xl text-green-500">$12,345</p>
            </div>
            <ProfileExperience />
          </div>
        </div>
        <div className="w-full">
          <Tabs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
