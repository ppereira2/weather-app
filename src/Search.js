import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  let [weather, setWeather] = useState({});
  let [city, setCity] = useState("Lisboa");
  const handleResponse = (response) => {
    setWeather({
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      speed: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  };

  const updateCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city..."
          onChange={updateCity}
        ></input>
        <button type="Submit">Search</button>
      </form>
      <ul>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.speed} km/h</li>
        <li>{weather.description}</li>
        <li>{weather.temperature} ºC</li>
        <li>
          <img src={weather.icon} alt={weather.description} />
        </li>
      </ul>
    </div>
  );
};

export default Search;
