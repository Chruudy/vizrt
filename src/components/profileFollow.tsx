import React from "react";

//This is the ProfileFollow component that displays the number of followers and following
const ProfileFollow: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="text-center mx-4">
        <p className="font-bold">200</p>
        <p className="text-grey065">followers</p>
      </div>
      <div className="text-center mx-4">
        <p className="font-bold">100</p>
        <p className="text-grey065">following</p>
      </div>
    </div>
  );
};

export default ProfileFollow;
