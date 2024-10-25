import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search = (props) => {
    const [search,setSearch]=useState('')
    const [typeId,setTypId]=useState(1)
    const  navigate=useNavigate()
    const handleSearch = (e) => {
        e.preventDefault()
        navigate(`/${search}/${typeId}`)
    }
  return (
    <div>
        <div>
            <form onSubmit={handleSearch} >
                <div>
                <label class="form-control" placeholder="Default Input" >Search For :</label>
                <select class="form-select" aria-label="Default select" onChange={(e)=>setSearch(e.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                </div>
                <div>
                <label class="form-control" placeholder="Default Input" >Id :</label>
                <input type="number"  class="form-control" placeholder="Default Input" onChange={(e)=>setTypId(e.target.value)}/>
                </div>
                <button class="btn btn-primary">Search</button>
            </form>
        </div>
        </div>
  )
}

export default Search