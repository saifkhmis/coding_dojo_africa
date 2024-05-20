import React from 'react'

const PersonCard = () => {
    const first_name =['doe','smith', 'fillmore','smith']
    const last_name = ['john','jane','jane','jane']
    const age = [45, 88, 50, 62]
    const hair_color = ['brown','black','brown','brown']
    const [doe , smit , fillmore,smith]=first_name;
    const [jo,ja,jann,naa]=last_name;
    const [one,tow,th,fr]=age;
    const[br,bl,bw,brw]=hair_color;
  return (
    <div><h1>{doe}, {jo}</h1>
    <p>Age:{one}</p>
    <p>Hair color: {br}</p>
    <h1>{smit}, {ja}</h1>
    <p>Age:{tow}</p>
    <p>Hair color: {bl}</p>
    <h1>{fillmore}, {jann}</h1>
    <p>Age:{th}</p>
    <p>Hair color: {bw}</p>
    <h1>{smith}, {naa}</h1>
    <p>Age:{fr}</p>
    <p>Hair color: {brw}</p>
    </div>
    
    
  )
}

export default PersonCard