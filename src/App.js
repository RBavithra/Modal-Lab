

import React from 'react';
import './index.css';

const App = () => {
  const items = [
    { id: 1, name: 'Melody Songs'},
    { id: 2, name: 'Devotional Songs' },
    { id: 3, name: 'Vibe Songs' },
    { id: 4, name: 'Sad Songs' },
    { id: 5, name: 'Love Songs' }
  ];

  return (
    <div className="container">
      <h1>Spotify</h1>
      <ul className="list">
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;