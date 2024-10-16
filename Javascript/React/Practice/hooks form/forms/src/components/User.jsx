import React, { useState } from 'react'

const UserForm=(props) => {
    const[FirstName, setFirstName]=useState("")
    const[LastName, setLastName]=useState("")
    const[Email, setEmail]=useState("")
    const[Password, setPassword]=useState("")
    const[ConfirmPassword, setConfirmPassword]=useState("")
    const{user,setUser}=props;
    const Users =(e)=>{
        e.preventDefault();
        const submit ={FirstName,LastName,Email,Password,ConfirmPassword}
        console.log(submit)
        setUser(submit);
        setConfirmPassword("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword('');
    }
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
        <form onSubmit={Users}>
        <div class="input-group mb-3">
        <label htmlFor="FirstName" class="input-group-text" id="inputGroup-sizing-default" >First Name :</label>
        <input type="FirstName"value={FirstName} onChange={(e)=> setFirstName(e.target.value)}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <label htmlFor="LastName"class="input-group-text" id="inputGroup-sizing-default">Last name : </label>
        <input type="LastName"value={LastName} onChange={(e)=> setLastName(e.target.value)}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        <label htmlFor="Email" class="input-group-text" id="inputGroup-sizing-default">Email :</label>
        <input type="Email" value={Email} onChange={(e)=>setEmail(e.target.value)}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
        <label htmlFor="Password" class="input-group-text" id="inputGroup-sizing-default">Password :</label> 
        <input type="Password"value={Password} onChange={(e)=> setPassword(e.target.value)}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <label htmlFor="ConfirmPassword" class="input-group-text" id="inputGroup-sizing-default">Confirm Password :</label>
        <input type="ConfirmPassword" value={ConfirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        <input type="submit" value="Create User" className='btn btn-success' class="btn btn-success" />
        </div>
        </form>
        <div>
          {user &&(
            <div>
              <p>First name:{user.FirstName}</p>
              <p>last name :{user.LastName}</p>
              <p>Email : {user.Email}</p>
              <p>Password :{user.Password}</p>
              <p> Confirm Password:{user.ConfirmPassword}</p>
            </div>
            
          )}
        </div>
    </div>
  )
}

export default UserForm