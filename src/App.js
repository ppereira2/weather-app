import React from "react";
import "./App.css";
import SearchForm from "./SearchForm";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <SearchForm />
      <City />
      <Forecast />
      <Footer />
    </div>
  );
}

export default App;
