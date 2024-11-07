import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const CreateProduct = (props) => {
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const handleTitleChange = (e) => {
        setProduct({ ...product, title: e.target.value })
    }
    const handlePriceChange = (e) => {
        setProduct({ ...product, price: e.target.value })
    }
    const handleDescriptionChange = (e) => {
        setProduct({ ...product, description: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/product", product)
            .then(res => {
                console.log(res.data)
                props.setMyProduct([...props.product, res.data])})
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className='container text-center mt-5'>
    <h1 className='text-center fs-1 font-bold'>Product Manager</h1>
    <form onSubmit={handleSubmit}>
          
        <div className="input-group mb-3">
            <span className="input-group-text" >Title :</span>
            <input type="text" className="form-control"  value={product.title} onChange={handleTitleChange}  />
        </div>
       
        <div className="input-group mb-3">
            <span className="input-group-text" >Price :</span>
            <input type="number" className="form-control"  value={product.price} onChange={handlePriceChange}  />
        </div>
      
        <div className="input-group mb-3">
            <span className="input-group-text" >Description :</span>
            <textarea className='form-control' value={product.description} onChange={handleDescriptionChange}></textarea>
        </div>

        <button type='submit' className='btn '>Create Product</button>
    </form>
</div>
  )
}

export default CreateProduct