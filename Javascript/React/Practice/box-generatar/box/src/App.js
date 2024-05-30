import React, { useState } from 'react';

import './App.css';

const Box = ({ color }) => {
  return (
    <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: color,
        display: 'inline-block',
        marginRight: '10px'
      }}
    />
  );
};

const App = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBoxes([...boxes, color]);
    setColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a color:
          <input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
        </label>
        <button type="submit">Add box</button>
      </form>
      <div>
        {boxes.map((color, index) => (
          <Box key={index} color={color} />
        ))}
      </div>
    </div>
  );
};

export default App;