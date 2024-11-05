import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo-dark.png";
import SeaechIcon from "../assets/search-dark.svg";
import DropdownIcon from "../assets/dropdown-dark.svg";
import NotifIcon from "../assets/notifification.png";
const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white py-[20px] z-50 relative top-0">
      <div className="w-[85%] mx-auto flex justify-between items-center gap-[20px] md:gap-[50px]">
        {/* Logo */}
        <div className="flex items-center max-w-content">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-[64px] w-[86px]" />
          </Link>
        </div>

        {/* Desktop Menu and Search */}
        <div className="hidden md:flex  justify-between items-center space-x-4 w-full max-w-[800px]">
          {/* Search Bar */}
          <div className="relative w-full  py-2">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-[#D2D2D1] rounded-[20px] bg-transparent border border-[#D2D2D1] py-2 pl-10 focus:outline-none placeholder:text-[#D2D2D1]"
            />
            <img
              className="absolute top-1/2 left-3 transform -translate-y-1/2"
              src={SeaechIcon}
              alt="Search Icon"
            />
          </div>
        </div>
        {/* Auth Links */}
        <div className="hidden md:flex justify-between items-center space-x-4 text-gray-800 text-sm  max-w-content">
          <img
            className="w-[40px] h-[40px] ursor-pointer"
            src={NotifIcon}
            alt=""
          />
          <div className="bg-[#FAFAFA] rounded-lg flex  justify-between items-center w-[150px]">
                <div className="bg-[#C4C4C4] w-[40px] h-[40px] rounded-full"></div>
                <span>
                    kalim
                </span>
                <img className="mr-2" src={DropdownIcon} alt="" />
          </div>
        </div>

        {/* Hamburger Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute bg-white w-full ${
          isMenuOpen ? "block" : "hidden"
        } `}
      >
        <ul className="flex flex-col mt-4 space-y-4">
          <div className="flex flex-col justify-between items-center gap-[20px] md:gap-[50px]">
            {/* Logo */}
            <div className="flex items-center max-w-content">
              <Link to="/">
                <img src={Logo} alt="Logo" className="h-[64px] w-[86px]" />
              </Link>
            </div>

            {/* Desktop Menu and Search */}
            <div className="hidden md:flex  justify-between items-center space-x-4 w-full">
              {/* Search Bar */}
              <div className="relative w-full max-w-[900px] py-2">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-white rounded-[20px] bg-transparent border border-white py-2 pl-10 focus:outline-none placeholder:text-white"
                />
                <img
                  className="absolute top-1/2 left-3 transform -translate-y-1/2"
                  src={SeaechIcon}
                  alt="Search Icon"
                />
              </div>
              {/* <img src={Line} alt="" /> */}
            </div>
            {/* Auth Links */}
            <div className="hidden md:flex justify-between items-center space-x-4 text-white text-sm  max-w-content">
              <Link
                to="/login"
                className="text-[16px] font-medium whitespace-nowrap"
              >
                Log In
              </Link>
              {/* <img src={Line} alt="" /> */}
              <Link
                to="/signup"
                className="text-[16px] font-medium whitespace-nowrap"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar2;
