import axios from "axios";
import React, { useEffect, useState } from "react";
import logo from "../images/Logo.png"
import { toast } from "react-toastify";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const { data } = await axios.get("http://localhost:7000/user/get");
    setUsers(data);
    console.log(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

    return (
      // <div className="min-h-screen ">
      //   {/* <h1 className="text-3xl font-semibold mb-6">User Management</h1> */}
      //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      //     <div className="w-[300px] border p-5 rounded-md shadow-lg ">
      //       {users.map((list) => (
      //         <div className="text-base font-semibold flex flex-col gap-3">
      //           <img src={logo} alt="" className="shadow-md" />
      //           <h1>Name:{list.name}</h1>
      //           <p>Email:{list.email}</p>
      //           <p>Number:{list.mobile}</p>
      //           <p>Address:{list.address}</p>
      //         </div>
      //       ))}
      //     </div>
            
      //   </div>
      // </div>
      <div className="min-h-screen bg-gray-50 py-10">
  <div className="overflow-x-auto px-4">
    <table className="min-w-full border-collapse border border-gray-200 bg-white rounded-lg shadow-lg">
      <thead>
        <tr className="bg-blue-600 text-white">
          <th className="px-6 py-3 text-left text-sm font-semibold">S.No</th>
          <th className="px-6 py-3 text-left text-sm font-semibold">Name</th>
          <th className="px-6 py-3 text-left text-sm font-semibold">Email</th>
          <th className="px-6 py-3 text-left text-sm font-semibold">Mobile</th>
          <th className="px-6 py-3 text-left text-sm font-semibold">Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            className={`border-b hover:bg-blue-50 ${
              index % 2 === 0 ? "bg-gray-100" : "bg-white"
            }`}
          >
            <td className="px-6 py-4 text-sm text-gray-700">{index + 1}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{user.name}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{user.email}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{user.mobile}</td>
            <td className="px-6 py-4 text-sm text-gray-800">{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
};

export default UserManagement;

