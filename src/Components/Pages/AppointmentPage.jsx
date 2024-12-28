import React from "react";
import Appointment from "../Appointment/Appointment";
import Sidebar from "../SuperAdminMain/Sidebar";
// import Sidebar from "../SuperAdminMain/Sidebar";

const AppointmentPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Sidebar Section */}
      <aside className="w-full md:w-64">
        <Sidebar />
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 p-4 bg-gray-50">
        <Appointment />
      </main>
    </div>
  );
};

export default AppointmentPage;
