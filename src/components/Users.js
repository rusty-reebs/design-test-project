// Users.js

import React from "react";
import Detail from "./Detail";
import { ReactComponent as AddPersonIcon } from "../img/addperson.svg";
import { ReactComponent as ClockIcon } from "../img/clock.svg";
import { ReactComponent as RetentionIcon } from "../img/retention.svg";
import { ReactComponent as StarIcon } from "../img/star.svg";

const Users = ({ data }) => {
  return (
    <div className="bg-white grid grid-cols-2 w-full rounded-md shadow-sm">
      <Detail
        title={"New Users"}
        icon={<AddPersonIcon />}
        bgcolor="bg-red-400/30"
        color="text-red-600"
        value={data.newUsers.value}
        change={data.newUsers.change}
      />
      <Detail
        title={"Unique Users"}
        icon={<StarIcon />}
        bgcolor="bg-green-400/30"
        color="text-green-600"
        value={data.uniqueUsers.value}
        change={data.uniqueUsers.change}
      />
      <Detail
        title={"Week 1 Retention"}
        icon={<RetentionIcon />}
        bgcolor="bg-blue-400/30"
        color="text-blue-600"
        format="percent"
        value={data.week1Retention.value}
        change={data.week1Retention.change}
      />
      <Detail
        title={"Session"}
        icon={<ClockIcon />}
        bgcolor="bg-orange-400/30"
        color="text-orange-600"
        units="sec"
        value={data.session.value}
        change={data.session.change}
      />
    </div>
  );
};

export default Users;
