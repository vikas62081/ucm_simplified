import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBell,
  faUser,
  faPlus,
  faTimes, // Include faTimes for the cross icon
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

const BottomNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  interface itemType {
    icon: IconDefinition;
    label: string;
  }

  const navItems: itemType[] = [
    { icon: faHome, label: "Home" },
    { icon: faSearch, label: "Search" },
    { icon: isOpen ? faTimes : faPlus, label: "Menu" }, // Toggle icon based on state
    { icon: faBell, label: "Notifications" },
    { icon: faUser, label: "Profile" },
  ];

  function toggleMenu(item: itemType) {
    if (item.icon === faPlus || item.icon === faTimes) {
      setIsOpen(!isOpen);
    }
  }
  return (
    <div
      className="sticky bottom-0 w-full bg-primary font-sans shadow-lg drop-shadow-2xl "
      // This ensures it's always at the bottom
    >
      <div className="grid grid-cols-5 items-center justify-items-center p-2">
        {navItems.map((item, index) => (
          <button
            key={index}
            onClick={() => toggleMenu(item)}
            className="flex h-12 w-12 items-center justify-center rounded-full text-xl text-white"
            style={{
              backgroundColor: "transparent",
              border: `${item.label === "Menu" ? "1px" : "0px"} solid white`, // Border added here
              transform:
                (item.icon === faPlus || item.icon === faTimes) && isOpen
                  ? "rotate(90deg)"
                  : "none",
              transition: "transform 0.3s ease",
            }}
            aria-label={item.label}
          >
            <FontAwesomeIcon icon={item.icon} />
          </button>
        ))}
      </div>

      {/* Popup menu with reversed triangle tip */}
      <div
        className={` absolute bottom-16 left-1/2 -translate-x-1/2 transform rounded-lg bg-white p-2 shadow-lg drop-shadow-sm transition-all duration-300 ease-out ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"}`}
      >
        <ul className="text-sm">
          <li className="cursor-pointer p-2 text-black hover:bg-gray-100">
            Add Accommodation
          </li>
          <li className="cursor-pointer p-2 text-black hover:bg-gray-100">
            Swap Request
          </li>
          <li className="cursor-pointer p-2 text-black hover:bg-gray-100">
            Add Professor
          </li>
        </ul>
        {/* Triangle */}
        <div className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 transform border-x-8 border-t-8 border-x-transparent border-t-white"></div>
      </div>
    </div>
  );
};

export default BottomNav;
