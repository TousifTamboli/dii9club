import React from 'react';
import { IoMdClose } from "react-icons/io";

export default function Navbar({ isOpen, onClose }) {
  return (
    isOpen && (
      <div className="fixed top-0 right-0 h-[50%] w-full bg-no-repeat bg-[url('/src/assets/images/navbar_bg.png')] text-white max-w-xs z-50 shadow">
        <div className="flex justify-end p-4">
          <IoMdClose className="text-white cursor-pointer text-[30px]" onClick={onClose} />
        </div>
        <div className="flex justify-center flex-col pt-24 tracking-wide items-center">
          <h2 className="font-semibod hover:cursor-pointer font-notoserif">Home</h2>
          <h2 className="font-semibod hover:cursor-pointer font-notoserif">About</h2>
          <h2 className="font-semibod hover:cursor-pointer font-notoserif">Gallery</h2>
          <h2 className="font-semibod hover:cursor-pointer font-notoserif">View</h2>
          <h2 className="font-semibod hover:cursor-pointer font-notoserif">Contact</h2>
        </div>
      </div>
    )
  );
}
