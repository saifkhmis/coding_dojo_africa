import React, { useState } from 'react'

const User=() => {
    const[FirstName, setFirstName]=useState("")
    const[LastName, setLastName]=useState("")
    const[Email, setEmail]=useState("")
    const[Password, setPassword]=useState("")
    const[ConfirmPassword, setConfirmPassword]=useState("")
    const users =(e)=>{
        e.preventDefault();
    }
  return (
    <div>
        <div>
        <label htmlFor="FirstName">First Name :</label>
        <input type="FirstName" onChange={(e)=> setFirstName(e.target.value)} />
        <label htmlFor="LastName">Last name : </label>
        <input type="LastName" onChange={(e)=> setLastName(e.target.value)} />
        <label htmlFor="Email">Email :</label>
        <input type="Email" onChange={(e)=>setEmail(e.target.value)} />
        <label htmlFor="Password">Password :</label> 
        <input type="Password" onChange={(e)=> setPassword(e.target.value)}/>
        <label htmlFor="ConfirmPassword">Confirm Password :</label>
        <input type="ConfirmPassword" onChange={(e)=> setConfirmPassword(e.target.value)}/>
        </div>
        <div>
        <p>First name :{JSON.stringify(FirstName)}</p>
          <p>Last name :{JSON.stringify(LastName)} </p>
          <p>Email :{JSON.stringify(Email)}</p>
          <p>Password :{JSON.stringify(Password)}</p>
          <p>Confirm password : {JSON.stringify(ConfirmPassword)}</p>
        </div>
    </div>
  )
}

export default User