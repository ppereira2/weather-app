import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./FormatDate";

const Weather = () => {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState("Lisbon");
  const handleResponse = (response) => {
    console.log(response.data);
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      speed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  };

  if (weather.ready) {
    return (
      <div>
        <div className="form-row">
          <form /*onSubmit={handleSubmit}*/ className="form-inline">
            <input
              className="form-control mx-sm-3 mb-2"
              type="search"
              placeholder="Search for city..."
              aria-label="Search"
              /*onChange={updateCity}*/
            />
            <button className="btn btn-outline-light mb-2 mr-3" type="submit">
              <svg
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                className="bi bi-search"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fill-rule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
            <button
              className="btn btn-outline-light mb-2"
              id="current-location"
              type="submit"
            >
              <svg
                width="1.3em"
                height="1.3em"
                viewBox="0 0 16 16"
                className="bi bi-geo-alt"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
            </button>
          </form>
        </div>
        <div className="row">
          <div className="col">
            <h1 className="city"> {city} </h1>
            <FormatDate date={weather.date} />
            <ul>
              <li>
                Humidity: <span id="humidity">{weather.humidity} </span>%
              </li>
              <li>
                Wind: <span id="wind"> {weather.speed} </span> km/h
              </li>
              <li>
                <span id="description"> {weather.description} </span>
              </li>
            </ul>
            <div className="temperature">
              <span className="temperature-number">{weather.temperature}</span>
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
            <img
              className="day-icon"
              alt={weather.description}
              src={weather.icon}
            />
          </div>
        </div>
      </div>
    );
  } else {
    /*const handleSubmit = (event) => {
      event.preventDefault();*/
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    /*};

    const updateCity = (event) => {
      setCity(event.target.value);
    };*/
    return "loading...";
  }
};

export default Weather;
