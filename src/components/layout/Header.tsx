// src/components/layout/Header.tsx
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Drawer from "./Drawer"; // Import the Drawer component
import Logo from "../../assets/logo.png";
const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <header className="sticky top-0 w-full py-3 px-6 flex justify-between items-center text-white bg-primary shadow-md ">
        <div className="">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>

        <img src={Logo} alt="Logo" className="h-8" />
        <FontAwesomeIcon
          icon={faUserCircle}
          size="xl"
          className="cursor-pointer"
        />
      </header>
      <Drawer isOpen={isDrawerOpen} closeDrawer={() => setDrawerOpen(false)} />
    </>
  );
};

export default Header;
