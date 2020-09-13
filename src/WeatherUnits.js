import React, { useState } from "react";

const WeatherUnits = (props) => {
  let [units, setUnits] = useState("celsius");

  const displayFahrenheit = (event) => {
    event.preventDefault();
    setUnits("fahrenheit");
  };

  const displayCelsius = (event) => {
    event.preventDefault();
    setUnits("celsius");
  };

  const convertToFahrenheit = () => {
    return Math.round((props.temperature * 9) / 5 + 32);
  };

  if (units === "celsius") {
    return (
      <div className="temperature">
        <span className="temperature-number">{props.temperature}</span>
        <span className="units">
          <span id="celsius" className="active">
            ºC
          </span>
          |
          <a href="/" id="fahrenheit" onClick={displayFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <span className="temperature-number">{convertToFahrenheit()}</span>
        <span className="units">
          <a href="/" id="celsius" onClick={displayCelsius}>
            ºC
          </a>
          |
          <span id="fahrenheit" className="active">
            ºF
          </span>
        </span>
      </div>
    );
  }
};

export default WeatherUnits;
