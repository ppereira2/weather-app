import React from "react";

const FormatDate = (props) => {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonth = months[props.date.getMonth()];
  let currentDay = props.date.getDate();
  let currentWeekday = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <ul>
      <li id="date">
        {currentWeekday}, {currentDay} {currentMonth} {hours}:{minutes}
      </li>
    </ul>
  );
};

export default FormatDate;
