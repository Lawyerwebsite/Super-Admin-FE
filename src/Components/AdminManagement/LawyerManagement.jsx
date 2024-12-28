import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  name: "",
  email: "",
  number: "",
  category: "",
  gender: "",
  experience: "",
  workplace: "",
  status: "",
};

const   LawyerManagement = () => {
  const [lawyers, setLawyers] = useState([]);
  const [formData, setFormData] = useState(initialState);

  const fetchLawyer = async () => {
    const { data } = await axios.get("http://localhost:7000/admin/");
    setLawyers(data);
  };

  useEffect(() => {
    fetchLawyer();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios
        .post("http://localhost:7000/admin/signup", formData)
        .then((res) => {
          toast.success(res.data.message);
          setFormData(initialState);
          if (formData.id) {
            setLawyers(
              lawyers.map((lawyer) =>
                lawyer.id === formData.id ? formData : lawyer
              )
            );
          } else {
            setLawyers([...lawyers, { ...formData, id: Date.now() }]);
          }
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };



  const handleAction = async (id, action) => {
    if (action === "delete") {
      await axios.delete(`http://localhost:7000/admin/${id}`);
    } else {
      await axios.put(`http://localhost:7000/admin/${id}/status`, {
        status: action,
      });
    }
    fetchLawyer();
  };

  console.log(lawyers);

  return (
    <div className="p-6 w-full  max-md:ml-0 max-md:mt-[60px]">
      <h1 className="text-2xl font-bold mb-2">Admin Management</h1>
      <hr className="border border-black"/>
        <br />
      <div className="bg-gray-200 p-4 rounded shadow mb-6">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            className="p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="p-2 border rounded"
          />
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleInputChange}
            placeholder="Number"
            className="p-2 border rounded"
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="">Category</option>
            <option value="banking">Banking</option>
            <option value="civil">Civil</option>
            <option value="corporate">Corporate</option>
            <option value="criminal">Criminal</option>
            <option value="family">Family</option>
            <option value="immigration">Immigration</option>
            <option value="realestate">RealEstate</option>
            <option value="service">Service</option>
            <option value="others">Others</option>
          </select>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleInputChange}
            placeholder="Experience"
            className="p-2 border rounded"
          />
          <input
            type="text"
            name="workplace"
            value={formData.workplace}
            onChange={handleInputChange}
            placeholder="Workplace"
            className="p-2 border rounded"
          />
          <select
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            className="p-2 border rounded"
          >
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add Lawyer
        </button>
      </div>
      <h2 className="text-xl mb-4">Lawyers List</h2>
      <table className=" table-auto w-full border-collapse border border-gray-300 ">
        <thead>
          <tr className=" bg-gray-300 ">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Number</th>
            <th className="p-2 border">Category</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Experience</th>
            <th className="p-2 border">Work Place</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {lawyers.map((lawyer) => (
            <tr className="text-center border-b" key={lawyer.id}>
              <td className="p-2 border">{lawyer.name}</td>
              <td className="p-2 border">{lawyer.email}</td>
              <td className="p-2 border">{lawyer.number}</td>
              <td className="p-2 border">{lawyer.category} </td>
              <td className="p-2 border">{lawyer.gender} </td>
              <td className="p-2 border">{lawyer.experience} </td>
              <td className="p-2 border">{lawyer.workplace}</td>
              <td className="p-2 border">{lawyer.status}</td>
              <td className="p-2 border">
                {/* <button
                  onClick={() => handleUpdate(lawyer)}
                  className="bg-yellow-500 text-white px-2 py-1 mr-2 rounded"
                >
                  Edit
                </button> */}
                <button
                  onClick={() => handleAction(lawyer.id, "delete")}
                  className="bg-red-500 text-white px-2 py-1 mr-2 rounded"
                >
                  Delete
                </button>
                {lawyer.status === "Active" ? (
                  <button
                    onClick={() => handleAction(lawyer.id, "Inactive")}
                    className="bg-gray-500 text-white px-2 py-1 mr-2 rounded"
                  >
                    Deactivate
                  </button>
                ) : (
                  <button
                    onClick={() => handleAction(lawyer.id, "Active")}
                    className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
                  >
                    Activate
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LawyerManagement;
