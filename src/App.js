import React, { useState } from "react";
import renderIf from "render-if";
import profileImage from "./components/images/sv.png";
import { NavBar } from "./components/NavBar";
import { Resume } from "./components/Resume";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import "./App.css";

export const App = () => {
  const [view, setView] = useState("home");

  const handleViewChange = (view) => {
    setView(view);
  };
  return (
    <div className="App">
      <NavBar changeView={handleViewChange} />
      {renderIf(view === "home")(
        <div id="bio">
          <div className="app-content">
            <img src={profileImage} alt="display" />
            <p id="name">Sourav Verma</p>
            <p id="title">Full Stack Developer</p>
            <p id="skills">
              ReactJS | JavaScript | C++ | Java | Python| REST | Ruby | Babel |
              NodeJS | Express| Webpack
            </p>
            <br />
            <div className="contact-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/soverma"
                rel="noopener noreferrer"
                target="blank"
              >
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/souravverma94"
                rel="noopener noreferrer"
                target="blank"
              >
                <i className="fab fa-github" aria-hidden="true" />
              </a>
              {/* Email */}
              <a
                href="mailto:sourav.verma@ttu.edu"
                rel="noopener noreferrer"
                target="blank"
              >
                <i className="fas fa-envelope-open-text" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
      {renderIf(view === "resume")(<Resume />)}
      {renderIf(view === "projects")(<Projects />)}
      {renderIf(view === "contact")(<Contact />)}
    </div>
  );
};

export default App;
