import React from 'react';
import profileImage from './img/sv.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React Portfolio</h1>
      <h2>Author: Sourav Verma</h2>
      <img style={{width: "300px"}} src={profileImage} alt="display" />
    </div>
  );
}

export default App;
