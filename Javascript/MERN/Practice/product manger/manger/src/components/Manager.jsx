import React, { useState } from 'react'
import axios from 'axios'
const Manager = () => {
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [price,setPrice]=useState('')
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            description,
            price,
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
  return (
    <div>
        <h1  class="text-primary">Product Manager</h1>
        <div>
            <form  class="row mb-3" onSubmit={onSubmitHandler}>
                <label>Title:</label><br/>
                <input type="text"  class="form-control" id="floatingInput" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <label>Price :</label><br />
                <input type="number"  class="form-control" id="floatingInput" onChange={(e)=>setPrice(e.target.value)} />
                <label >Description</label>
                <input class="form-control"  id="floatingTextarea"  type="text" onChange={(e)=>setDescription(e.target.value)} />
                <button class="btn btn-outline-primary" data-bs-toggle="button">submit</button>
            </form>
        </div>
    </div>
  )
}

export default Manager