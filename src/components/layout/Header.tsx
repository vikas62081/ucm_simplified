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
      <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-primary px-6 text-white shadow-md xs:py-2 sm:py-2 md:py-3 lg:py-3">
        <div className="">
          <FontAwesomeIcon
            icon={faBars}
            size="xl"
            className="cursor-pointer"
            onClick={toggleDrawer}
          />
        </div>

        <img src={Logo} alt="Logo" className="h-7" />
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
