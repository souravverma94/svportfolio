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
        <header>
          <div className="app-content">
            <img src={profileImage} alt="display" />
            <h3>Sourav Verma</h3>
            <h4>
              ReactJS | Redux | JavaScript | Babel | Webpack | C++ | Ruby | REST
            </h4>
            <p style={{ fontSize: "large" }}>
              I am a graduate student pursuing an MS in Computer Science at
              Texas Tech University. Before this, I have worked as Software
              Engineer at Cerner Corporation for 3+ years. Developing reusable
              and scalable clinical UI components using React, Redux, and
              designing Restful APIs using Java, JAX-RS framework, and
              supporting existing Visual C++ and MFC applications were my
              primary responsibilities in Cerner. After two years, I got
              promoted to Associate Senior Software Engineer at Cerner.
              Currently, I am working at Copart as Software Engineer Intern. My
              primary responsibilities are designing and developing reusable and
              scalable UI components using Javascript, React, and Redux and
              creating REST Apis using Ruby and Sinatra framework.
            </p>
            <div className="contact-links">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/soverma"
                rel="noopener noreferrer"
                target="blank"
              >
                <i class="fab fa-linkedin" aria-hidden="true" />
              </a>
              {/* Github */}
              <a
                href="https://github.com/souravverma94"
                rel="noopener noreferrer"
                target="blank"
              >
                <i class="fab fa-github" aria-hidden="true" />
              </a>
              {/* Email */}
              <a
                href="mailto:sourav.verma@ttu.edu"
                rel="noopener noreferrer"
                target="blank"
              >
                <i class="fas fa-envelope-open-text" aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>
      )}
      {renderIf(view === "resume")(<Resume />)}
      {renderIf(view === "projects")(<Projects />)}
      {renderIf(view === "contact")(<Contact />)}
    </div>
  );
};

export default App;
