import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
// import UserPage from "./Pages/UserPage";
import SignupPage from "./auth/Signup";
import LoginPage from "./auth/Login";
import Forgot from "./auth/Forgot";
import AppointmentPage from "./Pages/AppointmentPage";
import LawyerPage from "./Pages/LawyerPage";
import UserPage from "./Pages/UserPage";
import ReportPage from "./Pages/ReportPage";
import New from "./New";
import Sidebar from "./SuperAdminMain/Sidebar";
import SuperAdminProfile from "../Profile/ProfileDetials";

const RouterComponent = () => {
  return (
    <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<HomePage />} />
        <Route path="/user" element={<UserPage/>} />
        <Route path="/lawyer" element={<LawyerPage />} />
        <Route path="/appointment" element={<AppointmentPage />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/report" element={<ReportPage />} />
        <Route path="/new" element={<New />} />
        <Route path="/side" element={<Sidebar/>} />
        <Route path="/profile" element={<SuperAdminProfile/>} />
    </Routes>
  );
};

export default RouterComponent;
