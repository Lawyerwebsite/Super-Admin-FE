import React from "react";
import Chart from "react-apexcharts";

const LawyerRevenue = () => {
  // Sample lawyer data
  const lawyerData = [
    { name: "Lawyer A", revenue: 10000 },
    { name: "Lawyer B", revenue: 15000 },
    { name: "Lawyer C", revenue: 12000 },
    { name: "Lawyer D", revenue: 18000 },
    { name: "Lawyer E", revenue: 14000 },
  ];

  // Prepare the chart data and options
  const chartOptions = {
    chart: {
      type: "bar",
      height: "350",
    },
    xaxis: {
      categories: lawyerData.map((lawyer) => lawyer.name), // Map lawyer names to the X-axis
    },
    yaxis: {
      title: {
        text: "Revenue ($)",
      },
    },
    title: {
      text: "Lawyer Revenue",
      align: "center",
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        color: "#333",
      },
    },
    colors: ["#00E396"], // Set the color for the bar chart
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "50%",
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value.toLocaleString()}`, // Format tooltip values as currency
      },
    },
  };

  const chartSeries = [
    {
      name: "Revenue",
      data: lawyerData.map((lawyer) => lawyer.revenue), // Map revenue data to the chart
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Lawyer Revenue Chart</h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height="350"
      />
    </div>
  );
};

export default LawyerRevenue;
