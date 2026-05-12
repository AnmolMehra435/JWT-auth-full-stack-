import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx'
import './index.css'
import { useState } from 'react';

function App(){
  
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle)
  }

  if(toggle){
    return(
      <>
      <div className="container">
      <Register/>
      <p>Already have an account? <button onClick={handleToggle}>Login</button></p>
      </div>
      </>
    )
  }else{
    return(
      <>
      <div className="container">
      <Login/>
      <p>Don't have an account? <button onClick={handleToggle}>Register</button></p>
      </div>
      </>
    )
  }
}

export default App