import { useState } from 'react'
import { handleLogin } from '../services/authServices';
import '../app.css'
import '../index.css'
import { useNavigate } from 'react-router-dom';

function Login(){

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("")

    const login = (e) => {
        e.preventDefault();
        handleLogin(email, pass, navigate)

        setEmail("");
        setPass("");
    } 

    return (
        <>
          <form className="register-form" onSubmit={login}>
            <h1>Login User</h1>
            <input type="email" value={email} placeholder='Enter your email id' onChange={(e) => {setEmail(e.target.value)}} />
            <input type="password" value={pass} placeholder='Enter your password' onChange={(e) => {setPass(e.target.value)}} />
            <button type="submit">Login</button>
          </form>
      </>
    )
}

export default Login