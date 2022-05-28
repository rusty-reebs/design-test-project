// Views.js

import React, { useState } from "react";
import { ReactComponent as TrendingDownIcon } from "../img/trendingdown.svg";
import { ReactComponent as TrendingUpIcon } from "../img/trendingup.svg";

const viewsValue = 12700;
const viewsChange = 2.6;

const Views = () => {
  const [selectedButton, setSelectedButton] = useState("Day");

  const buttons = ["Day", "Week", "Month"];

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <div className="bg-white flex flex-col w-1/2 mx-auto p-4 rounded-md shadow-sm">
      <div className="flex justify-between w-full">
        <h2 className="text-lg">Views</h2>
        <div className="border border-gray-200 rounded-lg shadow-sm divide-x-2">
          {buttons.map((name, index) => {
            return (
              <button
                key={index}
                name={name}
                className={` py-1.5 px-3 first:rounded-l-lg last:rounded-r-lg ${
                  selectedButton === name ? "bg-gray-100" : "bg-white"
                } `}
                onClick={() => handleButtonClick(name)}
              >
                {name}
              </button>
            );
          })}
          {/* <button className="py-1.5 px-3">Day</button>
          <button className="py-1.5 px-3">Week</button>
          <button className="py-1.5 px-3">Month</button> */}
        </div>
      </div>
      <div className="flex gap-x-2">
        <h2 className="text-5xl">{viewsValue}</h2>
        <div className="flex flex-col text-sm">
          <p
            className={`block ${
              viewsValue >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {viewsValue >= 0 ? (
              <TrendingUpIcon className="inline h-6 text-current" />
            ) : (
              <TrendingDownIcon className="inline h-6 text-current" />
            )}
            &nbsp;
            {viewsChange}%
          </p>
          <p className="text-gray-400">&nbsp;VS PREV. DAY</p>
        </div>
      </div>
    </div>
  );
};

export default Views;
