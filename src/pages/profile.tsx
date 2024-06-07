import React from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer';  
import ProfileInfo from '../components/profileInfo';
import Experience from '../components/profileExperience';
import EditAccountButton from '../components/editAccount';
import Tabs from '../components/Tabs';

const Profile: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="container mx-auto p-4">
        <div className="text-center mt-4">
          <p className="text-xl font-bold">Estimated Earnings</p>
          <p className="text-3xl text-green-500">$12,345</p>
        </div>
        <div className="flex mt-8">
          <div className="w-1/3">
            <ProfileInfo />
          </div>
          <div className="w-2/3">
            <Experience />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <EditAccountButton />
        </div>
        <div className="flex justify-center mt-4">
          <Tabs />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
