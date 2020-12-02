import React, { useState } from "react";
import renderIf from "render-if";
import profileImage from "./img/sv.png";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { Resume } from "./components/Resume";

export const App = () => {
  const [view, setView] = useState("home");

  const handleViewChange = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <NavBar changeView={handleViewChange} />
      {renderIf(view === "home")(
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
      )}
      {renderIf(view === "resume")(<Resume />)}
    </div>
  );
};

export default App;
