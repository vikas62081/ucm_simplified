// src/components/layout/Drawer.tsx
import React from "react";
import { Link } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  closeDrawer: () => void;
}

const DrawerItems = [
  { item_name: "Home", path: "/home" },
  { item_name: "About", path: "/about" },
  { item_name: "Service", path: "/services" },
  { item_name: "Contact", path: "/contact" },
];

const Drawer: React.FC<DrawerProps> = ({ isOpen, closeDrawer }) => {
  return (
    <div
      className={`fixed inset-0 z-50 bg-gray-600 bg-opacity-50 transition-opacity duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={closeDrawer}
    >
      <aside
        className={`fixed left-0 top-0 h-full w-64 max-w-full bg-white p-5 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent click inside drawer from closing it
        style={{ height: "100vh" }} // Ensures the drawer does not exceed the viewport height
      >
        <h2 className="mb-4 text-lg font-bold">Navigation</h2>
        <ul>
          {DrawerItems.map((item) => (
            <li className="mb-2 cursor-pointer text-gray-600">
              <Link to={item.path}>{item.item_name}</Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Drawer;
