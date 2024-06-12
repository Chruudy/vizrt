// components/FollowStats.tsx
import React from 'react';

const ProfileFollow: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="text-center mx-4">
        <p className="font-bold">200</p>
        <p className="text-gray-500">followers</p>
      </div>
      <div className="text-center mx-4">
        <p className="font-bold">100</p>
        <p className="text-gray-500">following</p>
      </div>
    </div>
  );
};

export default ProfileFollow;
