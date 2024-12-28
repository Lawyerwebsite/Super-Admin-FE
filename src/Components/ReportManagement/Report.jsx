import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa";

const Report = () => {
  const [reports, setReports] = useState([]);
  console.log(reports);
  
  const [loading, setLoading] = useState(false);

  const GetReports = async () => {
    try {
      const { data } = await axios.get("http://localhost:7000/report/");
      setReports(data);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching reports", error);
      setLoading(false);
    }
  };

  const handleActive = async (id) => {
    try {
      const { data } = await axios.put(`http://localhost:7000/report/${id}`, {
        status: "Active",
      });
      setReports((prevReports) =>
        prevReports.map((report) =>
          report.id === id ? { ...report, status: data.status } : report
        )
      );
    } catch (error) {
      console.log("Error updating report status", error);
    }
  };

  const handleView = (id) => {
    setReports((prevData) =>
      prevData.map((reports) =>
        reports.id === id ? { ...reports, status: "Viewed" } : reports
      )
    );
  };

  useEffect(() => {
    GetReports();
  }, []);

  return (
    <div className="min-h-screen w-full bg-gray-200 p-6 mt-[60px] md:mt-0">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
      </header>
      <div className="overflow-x-auto bg-white shadow-md rounded-md">
        <table className="w-full border-collapse border border-black">
          <thead>
            <tr className="bg-blue-800 text-white">
              <th className="p-4 border border-gray-300 text-left ">Name</th>
              <th className="p-4 border border-gray-300 text-left">Role</th>
              <th className="p-4 border border-gray-300 text-left">Reports</th>
              <th className="p-4 border border-gray-300 text-left">
                Date
              </th>
              <th className="p-4 border border-gray-300 text-left">Status</th>
              <th className="p-4 border border-gray-300 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            
            {reports.map((report) => (
              <tr key={report.id} className="hover:bg-gray-100">
                <td className="p-4 border border-gray-300 ">{report.name}</td>
                <td className="p-4 border border-gray-300">{report.role}</td>
                <td className="p-4 border border-gray-300">{report.description}</td>
                <td className="p-4 border border-gray-300">
                  {new Date(report.date).toLocaleDateString()}
                </td>
                <td
                  className={`p-4 border border-gray-300 ${
                    report.status === "Active"
                      ? "text-green-600"
                      : report.status === "Inactive"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {report.status}
                </td>
                <td className="p-4 border border-gray-300">
                  <button
                    onClick={() => handleActive(report.id)}
                    className="bg-green-400 hover:bg-green-700 text-white font-bold p-1.5 mr-2 rounded-full"
                    title="Activate"
                  >
                    <FaCheck />
                  </button>
                  <button
                    onClick={() => handleView(report.id)}
                    className="bg-green-400 hover:bg-green-700 text-white font-bold p-1.5 rounded-full"
                    title="View"
                  >
                    <BsEyeFill />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
