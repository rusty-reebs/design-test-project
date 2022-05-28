// Users.js

import React from "react";
import Detail from "./Detail";
import data from "./data";

const Users = () => {
  return (
    <div className="bg-white grid grid-cols-2 w-1/2 mx-auto rounded-md shadow-sm">
      {data.map((detail, index) => {
        return (
          <Detail
            key={index}
            title={detail.title}
            icon={detail.icon}
            iconColor={detail.iconColor}
            value={detail.value}
            unit={detail.unit}
            format={detail.format}
            change={detail.change}
          />
        );
      })}
    </div>
  );
};

export default Users;
