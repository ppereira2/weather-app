import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import City from "./City";
import Forecast from "./Forecast";
import Foother from "./Footer";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <City />
      <Forecast />
      <script src=" src/script.js"> </script>
      <Foother />
    </div>
  );
}

export default App;
