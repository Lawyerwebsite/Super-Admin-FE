import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

function UserPieChart() {
  const data = {
    labels: ["Active Users", "Inactive Users", "New Users", "Returning Users"],
    datasets: [
      {
        label: "User Distribution",
        data: [45, 25, 20, 10], // Example data
        backgroundColor: ["#4CAF50", "#FF9800", "#03A9F4", "#E91E63"],
        borderColor: ["#fff", "#fff", "#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  return (



    <div style={{ width: "50%", margin: "0 auto" }}>
      <h2 className="text-center ">User Data Pie Chart</h2>
      <Pie data={data} options={options} />
    </div>
    
  );
}

export default UserPieChart;
