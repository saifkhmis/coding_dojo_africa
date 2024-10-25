import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const DisplayPeople = () => {
  const  [addPeople,setAddPeople]=useState({})
  const{peopleId}=useParams()
  useEffect((e)=>{
    axios.get(`https://swapi.dev/api/people/${peopleId}/?format=json `)
      .then(res=>{
        console.log(res)
        setAddPeople(res.data)
      })
      .catch(err=>{
        console.log(err)
      })
      
  },[peopleId] )
  return (
    <div>
      <h4 class="display-1"> {addPeople.name}</h4>
      <h5 class="display-3">height : {addPeople.height} cm</h5>
      <h5 class="display-3">  Mass : {addPeople.mass}kg</h5>
      <h5 class="display-3">hair color : {addPeople.hair_color}</h5>
      <h5 class="display-4">skin color :{addPeople.skin_color}</h5>
    </div>
  )
}

export default DisplayPeople