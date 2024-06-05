import React, { useState } from 'react';
import axios from 'axios';

const Api = () => {
  const [poki, setPoki] = useState([]); // Initialize as an empty array

  const fetchPoki = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        setPoki(response.data.results); // Update the state with the array of Pokémon
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={fetchPoki}>Fetch Pokémon</button>
      {poki.length > 0 && (
        <ul>
          {poki.map((pokemon) => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Api;