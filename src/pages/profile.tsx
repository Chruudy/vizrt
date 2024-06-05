// pages/profile.tsx
import React from 'react';
import Header from '../components/header'; 
import Footer from '../components/footer';  
import ProfileInfo from '../components/ProfileInfo';
import Experience from '../components/profileExperience';
import FollowStats from '../components/profileFollow';
import EditAccountButton from '../components/EditAccount';
import Tabs from '../components/Tabs';

const Profile: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main className="container mx-auto p-4">
        <div className="flex">
          <ProfileInfo />
          <div className="ml-16 flex-grow">
            <div className="text-center mt-4">
              <p className="text-xl font-bold">Estimated Earnings</p>
              <p className="text-3xl text-green-500">$12,345</p>
            </div>
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