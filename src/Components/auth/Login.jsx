import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  email: "",
  password: "",
};


const LoginPage = () => {
  const [formData, setFormData] = useState(initialState);


  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      await axios
        .post("http://localhost:7000/auth/login", formData)
        .then((res) => {
          console.log(res.data.token);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("adminId", res.data.findEmail._id)
          toast.success(res.data.message);
          setFormData(initialState);
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.response.data.message);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleReset = () => {
    setFormData(initialState)
  }

  return (
    <div className="auth-wrapper  w-[100%] h-[100vh] flex justify-center flex-col text-left bg-[url('https://law-staff-online.co.uk/wp-content/uploads/2020/03/Criminal-Law.jpg')] bg-no-repeat bg-cover bg-center ">
      <div className="auth-inner w-[350px] h-[400px] m-auto flex justify-center bg-gray-300 bg-opacity-70  shadow-xl pt-[40px] pr-[55px] pb-[45px] pl-[55px] rounded-2xl transition duration-300">
        <form onSubmit={handleOnSubmit} onReset={handleReset}>
          <h3 className="text-center  font-black text-3xl leading-none mb-5 text-blue-700 ">
            Login
          </h3>

          <div className="mb-3">
            <label className="font-medium font-sans mr-2 ">
              Email:
            </label>
            <br />
            <input
              type="email"
              name="email"
              value={formData.email}
              className="form-control focus:border-[#167bff] focus:shadow-none border px-5 py-2 rounded-lg"
              placeholder="Enter email"
              required
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-3">
            <label className="font-medium font-sans mr-2">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              value={formData.password}
              className="form-control focus:border-[#167bff] focus:shadow-none border px-5 py-2 rounded-lg"
              placeholder="Enter password"
              required
              onChange={handleOnChange}
            />
          </div>

          <div className="mb-3 flex justify-end">
            <div className="">
              {/* <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label
                className="custom-control-label font-normal"
                htmlFor="customCheck1"
              >
                Remember me
              </label> */}
              <p>
                <Link
                  to="/forgot"
                  className="text-blue-700 font-extrabold "
                >
                  Forgot Password?
                </Link>
              </p>
            </div>
          </div>

          <div className="d-grid">
              <button
                type="submit"
                className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 tracking-widest font-bold"
              >
                Submit
              </button>
          </div>
          <p className="forgot-password font-bold text-center text-[13px] pt-[10px] text-black ">
            {/* <a className="text-[#167bff]" href="/signup">Register</a> */}
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-700">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
