import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  newpassword: "",
  conformpassword: "",
};

const Forgot = () => {
  const [formData, setFormData] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios
        .post("http://localhost:7000/auth/forgot", formData)
        .then((res) => {
          toast.success(res.data.message);
          setFormData(initialState);
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
  };
  return (
    <div className="w-[100%] h-[100vh] flex justify-center flex-col text-left bg-[url('https://t4.ftcdn.net/jpg/09/25/46/89/240_F_925468986_2O5BsHqmGcTZK7fXg7jqhHtpZSWb0tOF.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="w-[400px] h-[450px] m-auto flex justify-center bg-gray-300 bg-opacity-30 shadow-xl pt-[40px] pb-[45px] rounded-2xl transition duration-300">
        <form
          className="w-[300px]"
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <h1 className="text-center m-0 font-bold text-3xl text-blue-600 leading-none pb-5">
            Forgot Password
          </h1>
          <div className="mb-3 ">
            <label className="font-medium font-sans">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              className="form-control focus:border-[#167bff] focus:shadow-none border w-full h-[40px] px-2 rounded-lg"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3 ">
            <label className="font-medium font-sans">New Password:</label>
            <br />
            <input
              type="password"
              name="newpassword"
              className="form-control focus:border-[#167bff] focus:shadow-none border w-full h-[40px] px-2 rounded-lg"
              placeholder="New Password"
              required
              value={formData.newpassword}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3 ">
            <label className="font-medium font-sans">Conform Password:</label>
            <br />
            <input
              type="password"
              name="conformpassword"
              className="form-control focus:border-[#167bff] focus:shadow-none border w-full h-[40px] px-2 rounded-lg"
              placeholder="Conform Password"
              required
              value={formData.conformpassword}
              onChange={handleOnChange}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-white bg-blue-600 rounded-md mt-3 hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgot;
