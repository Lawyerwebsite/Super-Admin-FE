import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[40px] bg-blue-500 flex justify-between">
      <input
        type="search"
        name=""
        id=""
        className="w-[50%] h-5 rounded-lg"
        placeholder="User, Admin & Appointments"
      />
      <div className="flex">
      <img className="w-[50px] rounded-full"
        src="https://th.bing.com/th/id/OIP.a5X28eBaMf_gOvFx0c5ejwHaE9?w=245&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
      />
      <select name="" id="">
        <option value=""></option>
        <option value="">Change Password</option>
        <option value="">Logout</option>
      </select>
      </div>
      
    </div>
  );
};

export default Navbar;
