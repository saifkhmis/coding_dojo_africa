import React, { useState } from 'react';

import './App.css';

const Box = ({ color, size }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        display: 'inline-block',
        marginRight: '10px'
      }}
    />
  );
};

const App = () => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState(50);
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBoxes([...boxes, { color, size }]);
    setColor('');
    setSize(50);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a color:
          <input type="text" value={color} onChange={(event) => setColor(event.target.value)} />
        </label>
        <label>
          Enter a size:
          <input type="number" value={size} onChange={(event) => setSize(event.target.value)} />
        </label>
        <button type="submit">Add box</button>
      </form>
      <div>
        {boxes.map(({ color, size }, index) => (
          <Box key={index} color={color} size={size} />
        ))}
      </div>
    </div>
  );
};

export default App;