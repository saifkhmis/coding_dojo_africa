import React from 'react'
import { Link } from 'react-router-dom'
const ShowAll = (props) => {
  return (
    <div className='container text-center mt-5'>
    <h1 className='text-center fs.1 font-bold'>All Products :</h1>
    {
       props.MyProduct && props.MyProduct.length > 0 ? 
       props.MyProduct.map(p => 
        <div key={p._id} className='text-center fs.2 font-bold'>
            <Link to={`/product/${p._id}`} className='text-center font-bold'>{p.title}</Link>
        </div>
       ) :(
        <div className='text-center fs.2 font-bold'>No products found</div>
       )
    }
</div>
  )
}

export default ShowAll