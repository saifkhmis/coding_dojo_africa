import React , { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const DisplayPlanets = () => {
  const  [addplanets,setAddPlanets]=useState({})
  const{planetsId}=useParams()
  useEffect((e)=>{
    axios.get(`https://swapi.dev/api/planets/${planetsId}/?format=json`)
      .then(res=>{
        console.log(res)
        setAddPlanets(res.data)
      })

      .catch(err=>{
        console.log(err)
      })
      
  },[planetsId] )
  return (
    <div>
      <h4 class="display-1">{addplanets.name}</h4>
      <h5 class="display-3">  climate : {addplanets.climate}</h5>
      <h5 class="display-3">Terrain : {addplanets.terrain}</h5>
      <h5 class="display-3">surface water: {addplanets.surface_water}</h5>
      <h5 class="display-3">population :{addplanets.population}</h5>
    </div>
  )
}

export default DisplayPlanets