// Detail.js

import React from "react";
import { ReactComponent as TrendingDownIcon } from "../img/trendingdown.svg";
import { ReactComponent as TrendingUpIcon } from "../img/trendingup.svg";

const Detail = ({
  title,
  icon,
  bgcolor,
  color,
  value,
  units,
  format,
  change,
}) => {
  return (
    <div className="flex first:border-b first:border-r last:border-t last:border-l">
      <div className="flex flex-col w-3/4 p-4 justify-around gap-2">
        <h2 className="text-md">{title}</h2>
        <p className="text-3xl">
          {value >= 1000 ? `${value / 1000}K` : value}
          {units ? ` ${units}` : null}
          {format ? "%" : null}
        </p>
        <p
          className={`text-sm ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change >= 0 ? (
            <TrendingUpIcon className="inline-block h-5 text-current" />
          ) : (
            <TrendingDownIcon className="inline-block h-5 text-current" />
          )}{" "}
          {change}% <span className="text-gray-400 ml-2">VS PREV. 28 DAYS</span>
        </p>
      </div>
      <div className="pt-5 w-1/4">
        <div className={`flex ${bgcolor} w-9 h-9 mx-auto rounded-full`}>
          <div className={`${color} h-1/2 w-1/2 m-auto`}>{icon}</div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
