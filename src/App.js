import React from "react";
import profileImage from "./img/sv.png";
import { NavBar } from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <header>
        <div className="app-content">
          <img src={profileImage} alt="display" />
          <h3>
            Hi, I am Sourav Verma, I am 26 years old, living in Lubbock, Texas
          </h3>
          <h4>
            I am learning full stack development. Watch this space for my
            upcoming projects
          </h4>
        </div>
      </header>
    </div>
  );
}

export default App;
