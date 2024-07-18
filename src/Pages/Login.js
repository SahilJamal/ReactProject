import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Login = (prop) => {

    const navigate = useNavigate();
    const {setUser} = prop;
    const [fname, setFname] = useState('');
    const [email, setEmail] = useState('');
    const handleSubmit=(e)=>{
    e.preventDefault();
    if(!fname || !email){
    return;
    }else{
    setUser({fname,email});
    navigate('/dashboard');
    }
    }
  return (
    <div>
      
      <form onSubmit={handleSubmit}>
        <label> Firstname </label>
        <input type="text" id="fname" name="fname" value={fname} onChange={(e)=>{setFname(e.target.value)}} />  <br />
        <label> Email </label>
        <input type="text" id="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br />

        <button> Login </button>
      </form>

      <NavLink to='/'>Home</NavLink>
    </div>
  )
}

export default Login