import React, { useState } from 'react';
import Navbar from './Navbar';
import { BiMenuAltLeft } from "react-icons/bi";
import logo from "../assets/images/dii9_logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#110416] p-6  top-0 z-50">
      <div className=" mx-auto h-5 flex justify-between items-center">
        <div className="pl-9">
          <img src={logo} alt="Image Logo" className="h-14" />
        </div>
        <div className="pr-9">
          <BiMenuAltLeft className="text-white text-[30px] cursor-pointer" onClick={toggleMenu} />
        </div>
      </div>
      <Navbar isOpen={isMenuOpen} onClose={toggleMenu} />
    </div>
  );
}
