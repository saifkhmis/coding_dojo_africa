import React from 'react'
import { useParams } from 'react-router-dom'

const All = () => {
    const {string,color}=useParams();
    const style={
        color:color,
        backgroundColor:'red',
        padding : '20px'
    }
  return (
    <div style={style}><h1 >The word is :{string}</h1></div>
  )
}

export default All