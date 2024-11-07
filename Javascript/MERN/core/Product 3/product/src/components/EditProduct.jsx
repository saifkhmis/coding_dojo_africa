import axios from 'axios'
import { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
const EditProduct = () => {
  const {id}= useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: ""
})
useEffect(()=>{
  axios.get(`http://localhost:8000/product/${id}`)
  .then(res=>{
    const oneProduct=res.data.product 
    setProduct(oneProduct)
  })
  .catch(err=>{
    console.error(err)
  })
},[id])

const handleChange=(e)=>{
  setProduct({...product,[e.target.name]:e.target.value})
}
const handleSubmit = (e)=>{
  e.preventDefault()
  axios.put(`http://localhost:8000/product/${id}/update`,product)
  .then(res=>{
    console.log('update successfully',res.data)
    navigate("/product")
  })
  .catch(err=>{
    console.error(err)
  })
}
  return (
    <div className='container text-center mt-5'>
    <h1 className='text-center fs-1 font-bold'>edit product</h1>
    <form onSubmit={handleSubmit}>
          
        <div className="input-group mb-3">
            <span className="input-group-text" >Title :</span>
            <input type="text" className="form-control"  value={product.title} name='title' onChange={handleChange}  />
        </div>
       
        <div className="input-group mb-3">
            <span className="input-group-text" >Price :</span>
            <input type="number" className="form-control"  value={product.price} name='price' onChange={handleChange}  />
        </div>
      
        <div className="input-group mb-3">
            <span className="input-group-text" >Description :</span>
            <textarea className='form-control' value={product.description} name='description' onChange={handleChange}></textarea>
        </div>
        <button type='submit' className='btn '>update</button>
    </form>
</div>
  )
}

export default EditProduct