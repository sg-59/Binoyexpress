import React, { useEffect, useState } from 'react'
import './signup.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { SignupInfo } from './Api'


const Signup = () => {

    const [firstname,setFirstname]=useState('')
    const [Lastname,setLastname]=useState('')
    const [Email,setEmail]=useState('')
    const [Mob,setMob]=useState(Number)
    const [Landmark,setLandmark]=useState('')
    const [Pin,setPin]=useState(Number)
    const [Password,setPassword]=useState('')
    const [seCkey,setseCkey]=useState('')

   async function submit(){
   SignupInfo({firstname,Lastname,Email,Mob,Landmark,Pin,Password,seCkey})

}

  return (
    <div className='main'>
        <h1>Signup Page</h1>
        <input type="text" placeholder='Firstname' onChange={(e)=>setFirstname(e.target.value)}/>
        <input type="text" placeholder='Lastname' onChange={(e)=>setLastname(e.target.value)}/>
        <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" placeholder='Mob' onChange={(e)=>setMob(e.target.value)}/>
        <input type="text" placeholder='Landmark' onChange={(e)=>setLandmark(e.target.value)}/>
        <input type="number" placeholder='Pin' onChange={(e)=>setPin(e.target.value)}/>
        <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder='seCkey' onChange={(e)=>setseCkey(e.target.value)}/>
        <button onClick={submit}>Submit</button>
        <Link to={'/'}><p>I Have an already an accout</p></Link>
    </div>
  )
}

export default Signup