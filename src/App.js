import React from "react";
import "./App.css";
import Another from "./components/Another";

const App = () => {
  return (
    <div className="main-container">
      <div className="nav-container">
        <h1>Name Age Guesser</h1>
      </div>
      <Another /> 
    </div>
  );
};

export default App;
