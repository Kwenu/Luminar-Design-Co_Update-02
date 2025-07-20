import React from "react";
import HomePage from "./components/HomePage";
import Aim from "./components/Aim";
import "./styles.css";

function App() {
  return (
    <div className="app-wrapper">
      <section id="home" className="page-section home-section">
        <HomePage />
      </section>
    </div>
  );
}

export default App;
