import React, { useState } from "react";
import Link from "next/link";

// This is the ValidatePhoneNumber component
const ValidatePhoneNumber: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    // This is the main div that contains the validate phone number form
    <div
      className="flex flex-col items-center pb-6 pt-10 min-h-screen"
      style={{ backgroundColor: "#1D3641" }}
    >
      <main className="w-full max-w-md space-y-8 px-8 min-h-[500px]">
        <h2 className="mt-6 text-2xl font-bold text-white text-center">
          Validate Your Phone Number
        </h2>
        <form className="mt-8">
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-grey035 mb-2">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="text"
              className="w-full px-4 py-2 bg-grey075 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue01"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <Link href="/profile" passHref>
            <button
              type="button"
              className="w-full py-2 bg-brandOrange text-white rounded hover:bg-brandOrangeDarker focus:outline-none focus:ring-2 focus:ring-brandOrange"
            >
              Validate
            </button>
          </Link>
        </form>
      </main>
    </div>
  );
};

export default ValidatePhoneNumber;
