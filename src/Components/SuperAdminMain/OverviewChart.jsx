import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const OverviewChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [timePeriod, setTimePeriod] = useState("weekly");

  const weeklyData = [2, 10, 27, 25, 14, 21, 18,];
  const monthlyData = [10, 16, 17, 28, 12, 19, 13, 21,];
  const yearlyData = [5, 10, 20, 18, 10, 19, 21, 27 ];

  let data;
  if (timePeriod === "weekly") {
    data = weeklyData;
  } else if (timePeriod === "monthly") {
    data = monthlyData;
  } else {
    data = yearlyData;
  }

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
        //   "Jan",
        //   "Feb",
        //   "Mar",
        //   "Apr",
        //   "May",
        //   "Jun",
        //   "Jul",
        //   "Aug",
        //   "Sep",
        //   "Oct",
        //   "Nov",
        //   "Dec",
        ],
        datasets: [
          {
            label: "",
            data: data,
            backgroundColor: "blue",
            borderColor: "blue",
            hoverBackgroundColor: "gray",
            borderWidth: 1,
            borderRadius: 8,
          },
        ],
      },
      options: {
        scales: {
          x: {
            grid: {
              display: false,
            },
            axis: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          y: {
            grid: {
              display: false,
            },
            beginAtZero: true,
            axis: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [timePeriod, data]);
  return (
    <div className="bg-white p-4 shadow-md rounded-lg h-[22rem] w-[80%]">
      <div className="flex justify-between p-2">
        <div className="flex flex-col">
          <p className="font-bold text-lg">Overview</p>
          <p className="text-gray-400 text-xs">Total Admin</p>
        </div>
        <div>
          <select
            value={timePeriod}
            onChange={(e) => setTimePeriod(e.target.value)}
            id="timePeriod"
            className="bg-gray-200 rounded text-gray-400"
            style={{ outline: "none" }}
          >
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
          
          
        </div>
      </div>
      <div className="h-56">
        <canvas ref={chartRef} width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default OverviewChart;
