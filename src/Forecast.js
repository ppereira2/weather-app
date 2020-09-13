import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

const Forecast = (props) => {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  const displayForecast = (response) => {
    setForecast(response.data);
    setLoaded(true);
  };

  const forecastWeather = () => {
    let apiKey = "1c9f5d317b6f1a9e6768efb4042554b7";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.data.city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(displayForecast);
  };

  if (loaded && props.data.city === forecast.city.name) {
    return (
      <div className="row" id="forecast">
        <ForecastPreview data={forecast.list[0]} />
        <ForecastPreview data={forecast.list[1]} />
        <ForecastPreview data={forecast.list[2]} />
        <ForecastPreview data={forecast.list[3]} />
        <ForecastPreview data={forecast.list[4]} />
      </div>
    );
  } else {
    forecastWeather();
    return <div className="spinner-border"></div>;
  }
};

export default Forecast;
