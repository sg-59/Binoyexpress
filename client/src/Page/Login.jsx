import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { LoginDatas } from './Api'
import { useDispatch } from 'react-redux'

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
const dispatch=useDispatch()
function display(){
  LoginDatas({email,password},dispatch)
}

  return (
    <div className='logmain'>
<h1>Login page</h1>
        <input type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={display}>Login</button>
        <Link to={'/signup'}>Create an Account</Link>
    </div>

  )
}

export default Login