import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

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
        <div className="temperature">
          <span className="temperature-number">{props.data.temperature}</span>
          <span className="units">
            <button id="celsius" className="active link-button">
              ºC
            </button>
            |
            <button id="fahrenheit" className="link-button">
              ºF
            </button>
          </span>
        </div>
      </div>
      <div className="col">
        <WeatherIcon
          code={props.data.icon}
          description={props.data.description}
        />
      </div>
    </div>
  );
};

export default WeatherData;
