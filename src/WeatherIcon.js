import React from "react";

const WeatherIcon = (props) => {
  const getIconFromWeather = () => {
    if (props.code === "01d") {
      return "day_clear.png";
    } else if (props.code === "01n") {
      return "night_half_moon_clear.png";
    } else if (props.code === "02n") {
      return "night_half_moon_partial_cloud.png";
    } else if (props.code === "02d") {
      return "day_partial_cloud.png";
    } else if (
      props.code === "03d" ||
      props.code === "03n" ||
      props.code === "04d" ||
      props.code === "04n"
    ) {
      return "cloudy.png";
    } else if (
      props.code === "09d" ||
      props.code === "09n" ||
      props.code === "10d" ||
      props.code === "10n"
    ) {
      return "rain.png";
    } else if (props.code === "11d" || props.code === "11n") {
      return "thunder.png";
    } else if (props.code === "13d" || props.code === "13n") {
      return "snow.png";
    } else if (props.code === "50d" || props.code === "50n") {
      return "mist.png";
    }
  };

  return (
    <img
      className="weather-icon"
      alt={props.description}
      src={`img/weather_icons_dovora_interactive/PNG/512/${getIconFromWeather()}`}
    />
  );
};

export default WeatherIcon;
