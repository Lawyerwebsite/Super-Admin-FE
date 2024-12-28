import React from "react";
import Logo from "../images/Logo.png";
import {
  AiOutlineCalendar,
  AiOutlineDashboard,
  AiOutlineFileText,
  AiOutlineTeam,
  AiOutlineUser,
} from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Header from "./Header";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <AiOutlineDashboard /> },
    { name: "Users", path: "/user", icon: <AiOutlineUser /> },
    { name: "Lawyers", path: "/lawyer", icon: <AiOutlineTeam /> },
    { name: "Appointments", path: "/appointment", icon: <AiOutlineCalendar /> },
    { name: "Reports", path: "/report", icon: <AiOutlineFileText /> },
    // { name: "Profile", path: "/profile", icon: <AiOutlineUser /> },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  return (
    <div className="fixed">
      <div className="relative top-0 md:hidden">
        <Header />
      </div>
      <div className="relative bg-white h-screen w-full border-r border-gray-200 shadow-lg flex flex-col max-md:hidden">
        <div className="p-5 border-b border-gray-200 ">
          <div className="flex justify-center items-center ">
            <img src={Logo} alt="Logo" className="w-28 h-14" />
          </div>

          <nav className="flex flex-col p-4 gap-3 ">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-lg text-gray-600 transition-all duration-200
               ${
                 isActive && location.pathname === item.path
                   ? "bg-gradient-to-r from-blue-900 to-blue-500 text-white"
                   : "hover:bg-gray-100 hover:shadow"
               }`
                }
              >
                <p className="h-5 w-5 text-xl">{item.icon}</p>
                <span className="font-medium px-6">{item.name}</span>
              </NavLink>
            ))}
            <div
              onClick={handleLogout}
              className="flex items-center space-x-3 p-3 rounded-lg text-gray-600 hover:bg-gray-100 hover:shadow cursor-pointer"
            >
              <span>
                <BiLogOut className="h-5 w-5 text-xl mr-6" />
              </span>
              <span className="font-medium ">Log Out</span>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
