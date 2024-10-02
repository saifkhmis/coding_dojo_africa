import React from 'react'

const PersonCard  = (props) => {
    const {firstName,lastName,age,HairColor}=props;

  return (
    <div>
        <h1>{firstName} , {lastName}</h1>
        <p>Age: {age}</p>
        <p>Hair Color: {HairColor}</p>
    </div>
  )
}

export default PersonCard