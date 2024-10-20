import React, { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    const [poke , setPoke]=useState([])
const axiosData=()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((response) => {
          const pokemonNames = response.data.results.map(pokemon => pokemon.name)
          setPoke(pokemonNames)
        })
        .catch((error) => {
          console.log("Error for fetching Pokemon Names", error)
        })
      }
  return (
    <div>
        <h1>Axios</h1>
        <div>
            <button onClick={axiosData}>Get Data</button>
        </div>
        <div><h1>name : {
            poke.map((poke,index)=>(
                <li key={index}>{poke}</li>
  ))

            }</h1></div>
    </div>
  )
}

export default Axios