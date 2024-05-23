import React from 'react'
import { useState } from 'react'
const PersonCard = () => {
    const first_name =['doe','smith', 'fillmore','smith']
    const last_name = ['john','jane','jane','jane']
    const age = [45, 88, 50, 62]
    const hair_color = ['brown','black','brown','brown']
    const [doe , smit , fillmore,smith]=first_name;
    const [jo,ja,jann,naa]=last_name;
    const [one,tow,th,fr]=age;
    const[br,bl,bw,brw]=hair_color;
    const [birth , setBirsth]= useState(45)
    function birthday (){
      setBirsth( birth + 1)
    }
    const[bir , setbir]= useState(88)
    function birthh (){
      setbir( bir + 1)
    }
  return (
    <div><h1>{doe}, {jo}</h1>
    <p>Age:{JSON.stringify(birth)}</p>
    <p>Hair color: {br}</p>
    <button onClick={birthday}>birthday button for smith</button>
    <h1>{smit}, {ja}</h1>
    <p>Age:{JSON.stringify(bir)}</p>
    <p>Hair color: {bl}</p>
    <button onClick={birthh} >birthday button for smith </button>
    </div>
    
    
  )
}

export default PersonCard