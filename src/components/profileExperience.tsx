import React from 'react';

const ProfileExperience: React.FC = () => {
  return (
    <div className="mt-8 flex justify-end">
      <div>
        <h3 className="text-xl font-bold text-center">Experience</h3>
        <div className="flex justify-center mt-4">
          <div className="bg-white shadow-md rounded p-4 mx-2">
            <p>Google</p>
            <p>UI/UX Designer - 3 years</p>
          </div>
          <div className="bg-white shadow-md rounded p-4 mx-2">
            <p>Airbnb</p>
            <p>UI Intern - 6 months</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileExperience;
