import React from "react";
import LawyerManagement from "../AdminManagement/LawyerManagement";
import Sidebar from "../SuperAdminMain/Sidebar";

const LawyerPage = () => {
  return (
    <div className="flex flex-col md:flex-row w-full">
    {/* Sidebar Section */}
    <aside className="w-full md:w-64">
      <Sidebar />
    </aside>

    {/* Main Content Section */}
    <main className="flex-1 p-4 bg-gray-50">
      <LawyerManagement />
    </main>
  </div>
  );
};

export default LawyerPage;
