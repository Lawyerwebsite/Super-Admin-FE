import React from "react";


const UserCard = ({ user, onBlockToggle, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col gap-2">
      <h3 className="text-lg font-bold text-gray-800"><span className="text-base">Name:</span>{user.name}</h3>
      <p className="text-gray-600"> <span className="font-bold text-black">Email:</span> {user.email}</p>
      <p className="text-sm">
        <span className="font-semibold">Appointments:</span> {user.appointments}
      </p>
      <p className="font-semibold">
        <span className="">Status:</span>{" "}
        {user.isBlocked ? (
          <span className="text-red-600">Blocked</span>
        ) : (
          <span className="text-green-600">Active</span>
        )}
      </p>
      <div className="flex gap-2 mt-2">
        <button
          onClick={() => onBlockToggle(user.id)}
          className={`px-4 py-1 rounded ${
            user.isBlocked ? "bg-green-500 text-white" : "bg-blue-500 text-white"
          }`}
        >
          {user.isBlocked ? "Unblock" : "Block"}
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-1 bg-red-600 text-white rounded"
        >
         Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
