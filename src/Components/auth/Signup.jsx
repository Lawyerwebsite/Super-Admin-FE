import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  fname: "",
  lname: "",
  email: "",
  number: "",
};

const SignupPage = () => {
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
        await axios.post('http://localhost:7000/auth/signup', formData)
        .then((res) => {
          toast.success(res.data.message);
          setFormData(initialState);
          navigate("/login");
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleReset = () => {
    setFormData(initialState);
  };

  return (
    <div className="auth-wrapper w-[100%] h-[100vh] flex justify-center flex-col text-left bg-[url('https://law-staff-online.co.uk/wp-content/uploads/2020/03/Criminal-Law.jpg')] bg-no-repeat bg-cover bg-center">
      <div className="auth-inner w-[400px] h-[550px]  m-auto flex justify-center  bg-gray-300 bg-opacity-70 shadow-xl pt-[40px]  pb-[45px] rounded-2xl transition duration-300 ">
        <form onSubmit={handleSubmit} onReset={handleReset} className="w-[250px]">
          <h3 className="text-center m-0 font-extrabold text-3xl text-blue-600 leading-none pb-5">
            Register
          </h3>
          <br />
          <div className="mb-3 ">
            <label className="font-medium font-sans">First Name:</label>
            <br />
            <input
              type="text"
              name="fname"
              className="form-control focus:border-[#167bff] focus:shadow-none border w-full h-[40px] px-2 rounded-lg"
              placeholder="First Name"
              required
              value={formData.fname}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label className="font-medium font-sans">Last Name:</label>
            <br />
            <input
              type="text"
              name="lname"
              className="form-control focus:border-[#167bff] focus:shadow-none border w-full h-[40px] px-2  rounded-lg"
              placeholder="Last Name"
              required
              value={formData.lname}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label className="font-medium font-sans">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              className="form-control focus:border-[#167bff] focus:shadow-none border w-full h-[40px] px-2  rounded-lg"
              placeholder="Enter email"
              required
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-3">
            <label className="font-medium font-sans">Number:</label>
            <br />
            <input
              type="number"
              name="number"
              className="form-control focus:borde-[#167bff] focus:shadow-none border w-full h-[40px] px-2  rounded-lg"
              placeholder="Enter number"
              required
              value={formData.number}
              onChange={handleOnChange}
            />
          </div>

          <div className="d-grid">
              <button
                type="submit"
                className="btn btn-primary w-full py-3 text-white bg-blue-600 rounded-md mt-3 hover:bg-blue-700"
              >
                Register
              </button>
          </div>
          <p className="forgot-password font-bold text-center text-[13px] pt-[10px] text-black">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-extrabold">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
