import React, { useState } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="App">
      <div className="drawer">
        <button onClick={toggleVisibility}>Toggle Button</button>
        <button className={`button-slide ${isVisible ? 'visible' : ''}`}>
          I'm the second button!
        </button>
      </div>
    </div>
  );
}

export default App;