import React, { useState, useEffect } from "react";
import axios from "axios";

const SuperAdminProfile = () => {
  const [profile, setProfile] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:8000/auth/"); 
      setProfile(response.data[0]); 
      setLoading(false);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setLoading(false);
    }
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewPhoto(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      if (newPhoto) formData.append("photo", newPhoto);

      Object.keys(profile).forEach((key) => {
        if (key !== "photo") {
          formData.append(key, profile[key]);
        }
      });

      const response = await axios.put(
        `http://localhost:8000/auth/update`,
        formData,
        {
          // headers: {
          //   "Content-Type": "multipart/form-data",
          // },
        }
      );

      setProfile(response.data);
      setEditMode(false);
      setNewPhoto(null);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCancel = () => {
    setNewPhoto(null);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    return <div>No Profile Data</div>;
  }

  return (
    <div className="w-full bg-gray-200 p-6">
      <div className="bg-white shadow-md rounded-md p-6 max-w-[90%] mx-auto">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Profile Details</h2>
        <hr className="border border-gray-300 mb-10" />

        {editMode ? (
          <div className="flex flex-col lg:flex-row gap-6 border p-10 shadow-md rounded-lg">
            <div className="flex flex-col items-center">
              <img
                src={
                  newPhoto ? URL.createObjectURL(newPhoto) : profile.photo || ""
                }
                alt="Profile"
                className="h-40 w-40 rounded-full object-cover border border-gray-300"
              />
              <label className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-700">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </label>
            </div>
            <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="fname"
                  value={profile.fname}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lname"
                  value={profile.lname}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Number
                </label>
                <input
                  type="text"
                  name="number"
                  value={profile.number}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={profile.country}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
                />
              </div>
              <div className="mt-4 flex gap-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-10 shadow-md rounded-lg border p-10 lg:flex-row">
            <div className="flex flex-col items-center justify-between">
              <img
                src={profile.photo || ""}
                alt="Profile"
                className="h-42 w-42 rounded-full object-cover border border-gray-300"
              />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
              <p>
                <strong>First Name:</strong> {profile.fname}
              </p>
              <p>
                <strong>Last Name:</strong> {profile.lname}
              </p>
              <p>
                <strong>Email:</strong> {profile.email}
              </p>
              <p>
                <strong>Role:</strong> {profile.role}
              </p>
              <p>
                <strong>Number:</strong> {profile.number}
              </p>
              <p>
                <strong>Gender:</strong> {profile.gender}
              </p>
              <p>
                <strong>Address:</strong> {profile.address}
              </p>
              <p>
                <strong>Country:</strong> {profile.country}
              </p>
              <button
                className="w-[30%] mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setEditMode(true)}
              >
                Edit Profile
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperAdminProfile;
