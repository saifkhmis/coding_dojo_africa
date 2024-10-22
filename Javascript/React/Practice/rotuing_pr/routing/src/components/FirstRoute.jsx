import React from 'react'
import { useParams } from 'react-router-dom'
const FirstRoute = () => {
  const {string}=useParams();
  return (
    <div>
        <h1>welcome{string}</h1>
    </div>
  )
}

export default FirstRoute