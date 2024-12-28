import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const LawyerRevenueChart = () => {
  const [search, setSearch] = useState("");
  const allData = [
    { name: "Lawyer A", revenue: 10000 },
    { name: "Lawyer B", revenue: 15000 },
    { name: "Lawyer C", revenue: 12000 },
    { name: "Lawyer D", revenue: 18000 },
    { name: "Lawyer E", revenue: 14000 },
  ];

  const filteredData = allData.filter((lawyer) =>
    lawyer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Lawyer Revenue Chart</h1>
        <input
          type="text"
          placeholder="Search Lawyer"
          className="mb-4 p-2 border rounded w-full outline-none "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <BarChart width={600} height={300} data={filteredData} className="mx-auto">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="revenue" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default LawyerRevenueChart;
