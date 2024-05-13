// src/components/BottomNav.tsx
import React from "react";

const NavItems = [
  { item_name: "Home", icon: "home" },
  { item_name: "Search", icon: "search" },
  { item_name: "profile", icon: "profile" },
];

const BottomNav: React.FC = () => {
  return (
    <div className=" bg-gray-800 text-white p-4 fixed inset-x-0 bottom-0 flex justify-around">
      {NavItems.map((item) => (
        <button className="focus:outline-none">{item.item_name}</button>
      ))}
    </div>
  );
};

export default BottomNav;
