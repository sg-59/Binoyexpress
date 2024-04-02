import React, { useEffect, useState } from 'react'
import { GetMyProfileData, deleteMydata } from './Api'
import { useDispatch, useSelector } from 'react-redux'
import './profile.css'
import Navbar from '../Component/Navbar'
import { useNavigate } from 'react-router-dom'
import { LogoutData } from '../Redux/Loginslice'
import {styled} from 'styled-components'
const Profile = () => {

  const Maindiv=styled.div`
  background-color:red ;
  width:100% ;
  height:500px ;
  `

  const Header=styled.h3`
  color:green ;
  `

  const navigate=useNavigate()
  const dispatch=useDispatch()

    const [profile,setProfile]=useState()

    const Datas=useSelector((state)=>state.login.LoginInformation[0])
console.log("Datas ok ?",Datas);
    if(Datas){
        var Id=Datas.Id
    }
    console.log(Id);

    useEffect(()=>{
      async  function hai(){
            const Profiledata=await GetMyProfileData(Id)
            console.log("finaly get it",Profiledata);
            setProfile(Profiledata)
        }
hai()
    },[])


    console.log("**********************",profile);


    function deleteAc(){
      deleteMydata(Id,dispatch)
    }

  return (
    <>
    <Navbar/>
   <Maindiv>
   <h1>Profile page</h1>
     <Header>Username : - {profile && profile.Firstname}</Header>
     <h3>Last name : - {profile && profile.Lastname}</h3>
     <h3>Email :-  {profile && profile.Email}</h3>
     <h3>Phone number :- {profile && profile.Mob}</h3>
     <h3>Landmark :- {profile && profile.Landmark}</h3>
     <h3>Pin number :- {profile && profile.Pin}</h3>
     <button style={{backgroundColor:'red'}} onClick={deleteAc}>Remove Account</button>
     </Maindiv>
</>


  )
}

export default Profile