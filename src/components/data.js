// data.js

import addPersonIcon from "../img/addperson.svg";
import clockIcon from "../img/clock.svg";
import retentionIcon from "../img/retention.svg";
import starIcon from "../img/star.svg";

const data = [
  {
    title: "New Users",
    icon: addPersonIcon,
    iconColor: "red-400",
    value: 1390,
    change: 147,
  },
  {
    title: "Unique Users",
    icon: starIcon,
    iconColor: "green-400",
    value: 1520,
    change: 53,
  },
  {
    title: "Week 1 Retention",
    icon: retentionIcon,
    iconColor: "blue-400",
    value: 4.53,
    format: "percent",
    change: -10.7,
  },
  {
    title: "Session",
    icon: clockIcon,
    iconColor: "orange-400",
    value: 0.9,
    unit: "sec",
    change: 29,
  },
];

export default data;
