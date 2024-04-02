import React from 'react'
import './navbar.css'
import { useDispatch } from 'react-redux'
import { LogoutData } from '../Redux/Loginslice'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const dispatch=useDispatch()
    function logoutpage(){
        dispatch(LogoutData())
            }
  return (
    <div className='nav'>
       <Link to={'/profile'}><h3  style={{cursor:'pointer'}}>Profile</h3></Link> 
       <Link to={'/update'}><h3  style={{cursor:'pointer'}}>Update page</h3></Link>
        <h3 onClick={logoutpage} style={{cursor:'pointer'}}>Logout</h3>
    </div>
  )
}

export default Navbar