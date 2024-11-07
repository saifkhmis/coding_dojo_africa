import React, { useState,useEffect } from 'react'

import axios from 'axios'
import ShowAll from "./ShowAll"
import CreateProduct from "./CreateProduct"
const Show = () => {
  const [MyProduct,setMyProduct]= useState([])
  useEffect(() => {
    axios.get("http://localhost:8000/product")
    .then(res => {
         setMyProduct(res.data.product)
    })
    .catch(err =>  console.error(err))
})

  return (
    <>
    <CreateProduct   MyProduct={MyProduct} setMyProduct={setMyProduct}/>
    <ShowAll MyProduct={MyProduct} setMyProduct={setMyProduct} />
    </>
  )
}

export default Show