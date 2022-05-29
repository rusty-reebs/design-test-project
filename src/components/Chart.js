// Chart.js

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    yAxis: {
      display: true,
      position: "right",
      ticks: {
        color: "#9ca3af",
      },
    },
    xAxis: {
      display: true,
      ticks: {
        color: "#9ca3af",
      },
    },
  },
  maintainAspectRatio: false,
};

const data = {
  labels: ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM"],
  datasets: [
    {
      data: [1.5, 2.0, 1.9, 2.1, 2.4, 2.0],
      borderColor: "rgb(53, 162, 235)",
      lineTension: 0.5,
    },
    {
      data: [1.9, 1.9, 1.9, 1.9, 1.9, 1.9],
      borderColor: "rgb(255, 99, 132, 0.5)",
      borderDash: [10, 10],
    },
  ],
};

const Chart = () => {
  return (
    <div className="max-h-fit w-full pt-4">
      <Line options={options} data={data} />
    </div>
  );
};

export default Chart;
