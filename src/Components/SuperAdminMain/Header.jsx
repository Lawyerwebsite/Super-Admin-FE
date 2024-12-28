import React from "react";
import Logo from "../images/Logo.png";
import { IoMenu, IoSearchSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { RiNotification2Line } from "react-icons/ri";

const Header = () => {
  return (
    <div className="md:hidden bg-white text-white flex items-center justify-between px-4 py-3 fixed w-full z-20 shadow-md">
        <button onClick={() => setOpen(!open)} className="text-2xl text-black">
          <IoMenu />
        </button>
        <img src={Logo} alt="Logo" className="w-10" />
        <div className="flex items-center gap-4">
          <RiNotification2Line className="text-2xl text-black" />
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img
              src="https://i.pinimg.com/550x/ab/57/ca/ab57cadd895944460c54e562c50d352e.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div> 
    // <div className="w-full h-16 px-4 bg-white shadow-md shadow-gray-200 flex justify-between items-center gap-5">
    //   <IoMenu  className="text-[20px] cursor-pointer"/>
    //   <img src={Logo} alt="" className="h-10 w-28"/>
    //   <div>
    //     <IoSearchSharp className="text-[20px] cursor-pointer"/>
    //     <IoMdNotifications className="text-[20px] cursor-pointer"/>
    //     <FaUserCircle className="text-[20px] cursor-pointer"/>
    //   </div>
    // </div>
  );
};

export default Header;


