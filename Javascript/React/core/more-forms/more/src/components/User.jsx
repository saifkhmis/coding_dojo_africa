import React, { useState } from 'react'

const User=()=> {
  const [first, setFirst] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const submit = (event) => {
    event.preventDefault();
    let firstNameValid = true;
    let lastNameValid = true;
    let emailValid = true;
    let passwordValid = true;

    if (first.length < 2) {
      setFirstNameError("First name must be at least 2 characters.");
      firstNameValid = false;
    } else {
      setFirstNameError(null);
    }

    if (last_name.length < 2) {
      setLastNameError("Last name must be at least 2 characters.");
      lastNameValid = false;
    } else {
      setLastNameError(null);
    }

    if (email.length < 5) {
      setEmailError("Email must be at least 5 characters.");
      emailValid = false;
    } else {
      setEmailError(null);
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
      passwordValid = false;
    } else {
      setPasswordError(null);
    }

    if (password!== confirmPassword) {
      setPasswordError("Passwords must match.");
      passwordValid = false;
    }

    if (firstNameValid && lastNameValid && emailValid && passwordValid) {
      // Form is valid, submit it here
      console.log("Form is valid, submitting...");
    }
  };

  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <form onSubmit={submit}>
        <label htmlFor="firstname" class="input-group-text" id="inputGroup-sizing-lg">First name:</label>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(event) => setFirst(event.target.value)} value={first} />
        {firstNameError && <p>{firstNameError}</p>} <br />
        <label htmlFor="las_name" class="input-group-text" id="inputGroup-sizing-lg">last name:</label>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" onChange={(event) => setLastName(event.target.value)} value={last_name} />
        {lastNameError && <p>{lastNameError}</p>} <br />
        <label htmlFor="email" class="input-group-text" id="inputGroup-sizing-lg">Email</label>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type='email' onChange={(event) => setEmail(event.target.value)} value={email} />
        {emailError && <p>{emailError}</p>} <br />
        <label htmlFor="password"class="input-group-text" id="inputGroup-sizing-lg">Password :</label>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type='password' onChange={(event) => setPassword(event.target.value)} value={password} />
        {passwordError && <p>{passwordError}</p>} <br />
        <label htmlFor="confirmpassword"class="input-group-text" id="inputGroup-sizing-lg">Confirm Password :</label>
        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" type='password' onChange={(event) => setConfirmPassword(event.target.value)} value={confirmPassword} /> <br />
        <button>submit</button>
      </form>
      <div>
        <p>First name :{JSON.stringify(first)}</p>
        <p>Last name :{JSON.stringify(last_name)} </p>
        <p>Email :{JSON.stringify(email)}</p>
        <p>Password :{JSON.stringify(password)}</p>
        <p>Confirm password : {JSON.stringify(confirmPassword)}</p>
      </div>
    </div>
  );

}

export default User