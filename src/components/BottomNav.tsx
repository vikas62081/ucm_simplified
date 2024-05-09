// src/components/BottomNav.tsx
import React from "react";

const BottomNav: React.FC = () => {
  return (
    <div className=" bg-gray-800 text-white p-4 fixed inset-x-0 bottom-0 flex justify-around">
      <button className="focus:outline-none">Home</button>
      <button className="focus:outline-none">Search</button>
      <button className="focus:outline-none">Profile</button>
    </div>
  );
};

export default BottomNav;
