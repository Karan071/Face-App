import React from "react";
import logo from "../assets/Alpheric.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-indigo-500 h-16 px-4 shadow-md">
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Alpheric Logo" className="h-12 w-10 object-contain" />
        <span className="text-white font-semibold text-lg">Alpheric Solutions</span>
      </div>

      {/* Navigation Section */}
      <ul className="flex space-x-6 text-white font-medium">
        <li className="hover:text-indigo-300 cursor-pointer">About Us</li>
        <li className="hover:text-indigo-300 cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
