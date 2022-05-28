// Detail.js

import React from "react";
// import { ReactComponent as addPersonIcon } from "../img/addperson.svg";
// import { ReactComponent as clockIcon } from "../img/clock.svg";
// import { ReactComponent as RetentionIcon } from "../img/retention.svg";
// import { ReactComponent as StarIcon } from "../img/star.svg";
import { ReactComponent as TrendingDownIcon } from "../img/trendingdown.svg";
import { ReactComponent as TrendingUpIcon } from "../img/trendingup.svg";

const Detail = ({ title, icon, iconColor, value, unit, format, change }) => {
  return (
    <div className="flex first:border-b first:border-r last:border-t last:border-l">
      <div className="flex flex-col w-3/4 p-4 justify-around">
        <h2 className="text-md">{title}</h2>
        <p className="text-3xl">
          {value}
          {/* {number > 1000 ? {{number} / 1000 + "K"} : null } */}
          {unit ? unit : null}
        </p>

        <p
          className={`block h-1/5 text-sm ${
            change >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          {change >= 0 ? (
            // <img
            //   src={trendingUpIcon}
            //   alt="trendingupicon"
            //   className="inline h-6 text-green-400"
            // />
            <TrendingUpIcon className="inline h-6 text-current" />
          ) : (
            // <img
            //   src={trendingDownIcon}
            //   alt="trendingdownicon"
            //   className="inline h-6"
            // />
            <TrendingDownIcon className="inline h-6 text-current" />
          )}
          &nbsp;
          {change}%{" "}
          <span className="text-gray-400">&nbsp;VS PREV. 28 DAYS</span>
        </p>
      </div>
      <div className="flex flex-col justify-start pt-5 w-1/4">
        <div className="h-1/3">
          <div className="flex bg-red-400 opacity-30 rounded-full w-1/2 h-full mx-auto">
            <img src={icon} alt={icon} className="w-1/2 mx-auto " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
