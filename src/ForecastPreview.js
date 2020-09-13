import React from "react";
import WeatherIcon from "./WeatherIcon";

const ForecastPreview = (props) => {
  const formatHours = (timestamp) => {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    let currentHour = `${hours}:${minutes}`;

    return currentHour;
  };

  return (
    <div className="col">
      <h5 id="day">{formatHours(props.data.dt * 1000)}</h5>
      <WeatherIcon
        name="forecast"
        code={props.data.weather[0].icon}
        description={props.data.weather[0].description}
      />
      <h5 id="day-temp">
        <span id="min">{Math.round(props.data.main.temp_min)}º</span>/
        <span id="max">{Math.round(props.data.main.temp_max)}º</span>
      </h5>
    </div>
  );
};

export default ForecastPreview;
