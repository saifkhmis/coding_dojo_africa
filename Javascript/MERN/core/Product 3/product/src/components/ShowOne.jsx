import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ShowOne = () => {
    const { id } = useParams()
    const [oneProduct, setOneProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/product/${id}`)
            .then(result => {
                setOneProduct(result.data.product)
                console.log(result.data.product)
            })
            .catch(err => console.error(err))
    }, [id])
    return (
        <div className='container mt-4 text-center'>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/product`} className='btn btn-primary'>Home</Link>
            </div>
            <div className='text-center mt-4'>
                <div className='card-header text-center'>
                    <h5 className='text-center fs.2 '>Title: {oneProduct.title}</h5>
                </div>
                <div className='text-center'>
                    <p className='text-center '>Description: {oneProduct.description}</p>
                    <p className='text-center '>Price: ${oneProduct.price}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                <Link to={`/product/${oneProduct._id}/update`} className='btn btn-primary'>update</Link>
            </div>
            </div>
        </div>
    )
}

export default ShowOne