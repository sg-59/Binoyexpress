import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar'
import { GetMyProfileData, UpdateMydata } from './Api'
import { useSelector } from 'react-redux'


const Update = () => {

    const [info,setInfo]=useState()

    const Data=useSelector((state)=>state.login.LoginInformation[0])
    console.log("data*****",Data);

    if(Data){
        var Id=Data.Id
    }

    const [Firstname,setFirstname]=useState()
    const [Lastname,setLastname]=useState()
    const [Email,setEmail]=useState()
    const [Mob,setMob]=useState()
    const [Landmark,setLandmark]=useState()
    const [Pin,setPin]=useState()
    const [Password,setPassword]=useState()
    const [seCkey,setseCkey]=useState()

    useEffect(()=>{
async function display(){
   const mydata=await GetMyProfileData(Id)
   console.log("finaly ok aahno",mydata);
   setInfo(mydata)
}
display()
    },[])

    function update(){
UpdateMydata({Firstname,Lastname,Email,Mob,Landmark,Pin,Password,seCkey},Id)

}
  return (
    <> 
    <Navbar/>
    <div className='main'>
        <h1>Update Page</h1>
        <input type="text"  placeholder={info&&info.Firstname} onChange={(e)=>setFirstname(e.target.value)}/>
        <input type="text" placeholder={info &&info.Lastname} onChange={(e)=>setLastname(e.target.value)}/>
        <input type="email" placeholder={info &&info.Email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="number" placeholder={info &&info.Mob} onChange={(e)=>setMob(e.target.value)}/>
        <input type="text" placeholder={info &&info.Landmark} onChange={(e)=>setLandmark(e.target.value)}/>
        <input type="number" placeholder={info &&info.Pin} onChange={(e)=>setPin(e.target.value)}/>
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
        <input type="text" placeholder={info &&info.seCkey} onChange={(e)=>setseCkey(e.target.value)}/>
        <button onClick={update}>Update</button>
      
    </div>
    </>
  )
}

export default Update