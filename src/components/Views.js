// Views.js

import React, { useState } from "react";
import { ReactComponent as TrendingDownIcon } from "../img/trendingdown.svg";
import { ReactComponent as TrendingUpIcon } from "../img/trendingup.svg";

const Views = ({ data }) => {
  const [selectedButton, setSelectedButton] = useState("Day");

  const buttons = ["Day", "Week", "Month"];

  const handleButtonClick = (name) => {
    setSelectedButton(name);
  };

  return (
    <div className="bg-white flex flex-col w-full p-4 rounded-md shadow-sm">
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
        </div>
      </div>
      <div className="flex gap-x-2">
        <h2 className="text-5xl">
          {data.views.value >= 1000
            ? `${data.views.value / 1000}K`
            : data.views.value}
        </h2>
        <div className="flex flex-col text-sm">
          <p
            className={`${
              data.views.value >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {data.views.value >= 0 ? (
              <TrendingUpIcon className="inline-block h-6 text-current" />
            ) : (
              <TrendingDownIcon className="inline-block h-6 text-current" />
            )}{" "}
            {data.views.change}%
          </p>
          <p className="text-gray-400 ml-2">VS PREV. DAY</p>
        </div>
      </div>
    </div>
  );
};

export default Views;
