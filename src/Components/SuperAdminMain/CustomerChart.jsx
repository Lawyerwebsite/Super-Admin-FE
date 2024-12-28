import { plugins } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

const CustomerChart = () => {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thus", "Fri"],
    datasets: [
      {
        data: [20, 30, 25, 35, 40],
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FFC107",
          "#FF5722",
          "#FFC107",
        ],
        borderColor: ["#4CAF50", "#2196F3", "#FFC107", "#FF5722", "#FF5722"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    reponsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };
  return (
    <div className="bg-white shadow-md rounded p-5 w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-3">Case Distribution</h2>
      <div className="h-[17rem] flex justify-center">
        <Pie data={data} options={options}/>
      </div>
    </div>
  )
};

export default CustomerChart;
