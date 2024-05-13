// src/components/layout/Drawer.tsx
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const DrawerItems = [
  { item_name: "Home", icon: "home" },
  { item_name: "About", icon: "about" },
  { item_name: "Service", icon: "services" },
  { item_name: "Contact", icon: "contact" },
];

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
          {DrawerItems.map((item) => (
            <li className="mb-2 cursor-pointer">{item.item_name}</li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Drawer;
