import React from 'react';
import profileImage from './img/sv.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <img src={profileImage} alt="display" />
        <h1>Hi, I am Sourav Verma, I am 26 years old, living in Lubbock, Texas</h1>
        <h3>I am learning full stack development. Watch this space for my upcoming projects</h3>
      </header>
    </div>
  );
}

export default App;
