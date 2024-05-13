// src/components/layout/Drawer.tsx
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={closeDrawer}
    >
      <aside
        className={`fixed top-0 left-0 w-64 max-w-full h-full bg-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent click inside drawer from closing it
        style={{ height: "100vh" }} // Ensures the drawer does not exceed the viewport height
      >
        <h2 className="font-bold text-lg mb-4">Navigation</h2>
        <ul>
          <li className="mb-2 color-red cursor-pointer">Home</li>
          <li className="mb-2 cursor-pointer">About</li>
          <li className="mb-2 cursor-pointer">Services</li>
          <li className="mb-2 cursor-pointer">Contact</li>
        </ul>
      </aside>
    </div>
  );
};

export default Drawer;
