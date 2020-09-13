import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherUnits from "./WeatherUnits";

const WeatherData = (props) => {
  return (
    <div className="row">
      <div className="col">
        <h1 className="city">{props.data.city}</h1>
        <FormatDate date={props.data.date} />
        <ul>
          <li>
            Humidity: <span id="humidity">{props.data.humidity} </span>%
          </li>
          <li>
            Wind: <span id="wind"> {props.data.speed} </span> km/h
          </li>
          <li>
            <span id="description"> {props.data.description} </span>
          </li>
        </ul>
        <WeatherUnits temperature={props.data.temperature} />
      </div>
      <div className="col">
        <WeatherIcon
          name="weather"
          code={props.data.icon}
          description={props.data.description}
        />
      </div>
    </div>
  );
};

export default WeatherData;
