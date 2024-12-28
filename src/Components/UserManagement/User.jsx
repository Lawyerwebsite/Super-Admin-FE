import React from "react";
import UserManagement from "./UserManagement";

const User = () => {
  return (
    <div className="w-full mt-[20px] max-md:p-6 ml-6 max-md:ml-0 ">
      <h1 className="text-2xl py-4 font-bold">User Management</h1>
      <hr className="border border-black" />
      <br />
      <UserManagement />
    </div>
  );
};

export default User;
