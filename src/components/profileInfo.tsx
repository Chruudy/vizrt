// pages/profile.tsx
import React from 'react';
import Header from '../components/Header';  // Adjust the import path as needed
import Footer from '../components/Footer';  // Adjust the import path as needed
import ProfileInfo from '../components/ProfileInfo';
import Experience from '../components/Experience';
import FollowStats from '../components/FollowStats';
import EditAccountButton from '../components/EditAccountButton';
import Tabs from '../components/Tabs';

const Profile: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex justify-center items-center h-32 mt-8">
          <div className="text-center">
            <p className="text-xl font-bold">Estimated Earnings</p>
            <p className="text-3xl text-green-500">$12,345</p>
          </div>
        </div>
        <div className="flex mt-8">
          <ProfileInfo />
          <div className="ml-16 flex-grow">
            <Experience />
          </div>
        </div>
        <FollowStats />
        <EditAccountButton />
        <Tabs />
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
