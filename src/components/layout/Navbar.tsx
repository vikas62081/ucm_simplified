// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white text-lg p-3">
      <div className="flex justify-between items-center">
        <img src="/icons/logo.svg" alt="Logo" className="h-8" /> // Logo for
        branding
        <div>
          <button className="p-2 mx-1">
            <img src="/icons/search.svg" alt="Search" className="w-6 h-6" />
          </button>
          <button className="p-2 mx-1">
            <img src="/icons/menu.svg" alt="Menu" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
