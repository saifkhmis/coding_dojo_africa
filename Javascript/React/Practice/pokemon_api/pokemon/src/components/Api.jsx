import React, { useState } from 'react';

export const Api = () => {
  const [poki, setPoki] = useState([]); // Initialize as an empty array

  const fetchPoki = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      .then(data => {
        setPoki(data.results); // Update the state with the array of Pokémon
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
            <li >{pokemon.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};