import { useState } from 'react'
import { handleRegister } from '../services/authServices';
import '../index.css'
import '../app.css'

function Register(){

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

    const login = (e) => {
        e.preventDefault();
        handleRegister(email, pass)
        setEmail("");
        setPass("");
    } 

    return (
        <>
          <form className="register-form" onSubmit={login}>
            <h1>Register User</h1>
            <input type="email" value={email} placeholder='Enter your email id' onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" value={pass} placeholder='create password' onChange={(e) => {setPass(e.target.value)}} />
            <button type="submit">Register</button>
          </form>
      </>
    )
}

export default Register