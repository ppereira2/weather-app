import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Weather />
      <Forecast />
      <Footer />
    </div>
  );
};

export default App;
