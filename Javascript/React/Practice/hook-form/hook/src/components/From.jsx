import React from 'react'
import { useState } from 'react'

const From = () => {
    const [first , setfirst]=useState("");
    const [last_name , setlast_name]=useState("");
    const [email , setemail]=useState("");
    const [password , setpasswoed]=useState("");
    const[confirmpassword , setconfirmpassword]=useState("")



    const submit = (event)=> {
      event.preventDefault();
      console.log("hi");
      
    }



  return (
    <div>
        <form onSubmit={submit}>
            <p>First name :</p>
            <input onChange={(event)=>setfirst(event.target.value)}/>
            <p>Last name :</p>
            <input onChange={(event)=> setlast_name(event.target.value)}/>
            <p>Email :</p>
            <input type='email' onChange={(event)=>setemail(event.target.value)} />
            <p>Password :</p> 
            <input type='password' onChange={(event)=>setpasswoed(event.target.value)}/>
            <p>Confirm password :</p> 
            <input type='password' onChange={(event)=>setconfirmpassword(event.target.value)}/>
            <button >submit</button>
        </form>
        <div>
          <p>First name :{JSON.stringify(first)}</p>
          <p>Last name :{JSON.stringify(last_name)} </p>
          <p>Email :{JSON.stringify(email)}</p>
          <p>Password :{JSON.stringify(password)}</p>
          <p>Confirm password : {JSON.stringify(confirmpassword)}</p>
        </div>
    </div>
  )
}

export default From