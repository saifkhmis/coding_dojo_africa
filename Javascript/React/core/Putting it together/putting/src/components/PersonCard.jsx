import React, { useState } from 'react'

const PersonCard  = (props) => {
    const {firstName,lastName,age,HairColor}=props;
    const [num , setNum]=useState(age)
    const setage=()=>{
      setNum(num + 1);
    }

  return (
    <div>
        <h1>{firstName} , {lastName}</h1>
        <p>Age: {num}</p>
        <p>Hair Color: {HairColor}</p>
        <button onClick={setage}>Birthday Button for {firstName}</button>
    </div>
  )
}

export default PersonCard