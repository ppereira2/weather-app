import React from "react";
import "./App.css";

export default function City() {
  let weatherData = {
    city: "Lisbon",
    temperature: 19,
    date: "Sunday, 16 August 19:48",
    description: "Cloudy",
    imgUrl: "img/day_clear.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="row">
      <div className="col">
        <h1 className="city"> {weatherData.city} </h1>
        <ul>
          <li id="date"> {weatherData.date} </li>
          <li>
            Humidity: <span id="humidity"> {weatherData.humidity} </span>%
          </li>
          <li>
            Wind: <span id="wind"> {weatherData.wind} </span> km/h
          </li>
          <li>
            <span id="description"> {weatherData.description} </span>
          </li>
        </ul>
        <div className="temperature">
          <span className="temperature-number">{weatherData.temperature}</span>
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
        <img className="day-icon" alt="description" src={weatherData.imgUrl} />
      </div>
    </div>
  );
}
