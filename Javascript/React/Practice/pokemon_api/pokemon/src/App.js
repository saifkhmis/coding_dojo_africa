import React, { useState } from 'react'

const  App = () =>{
  const [hero,setHero]=useState('')
  const fetchHeros =()=> {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(Response=>{
      return Response.json()
    } )
    .then(jasonResponse=>{console.log(jasonResponse) 
    setHero(jasonResponse)})
    .catch(err=> {console.log(err)})
  }
  return (
    <div>
      <h1>pokemon api </h1>
      <div>
        <button onClick={fetchHeros}>fetch api </button>
        <p>{JSON.stringify(hero)}</p>
      </div>
    </div>
  );
}

export default App