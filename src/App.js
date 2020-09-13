import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Weather />
      <Footer />
    </div>
  );
};

export default App;
