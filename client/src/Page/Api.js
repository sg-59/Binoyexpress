import axios from "axios";
import { LogoutData, takeLogindata } from "../Redux/Loginslice";
import { useNavigate } from "react-router-dom";
import { TokenRequest, basicRequest } from "./Axioscreate";


export const SignupInfo=async(data)=>{
console.log(">>>>>>>>>",data);
try{
const SignupData=await basicRequest.post('/binoy/signup',data)
console.log("final answer get",SignupData.data);
}catch(err){
    console.log(err.message);
}
}

export const LoginDatas=async(data,dispatch)=>{
console.log("data ",data);

try{
const LoginInfo=await basicRequest.post('/api/login',data)
console.log("Login in answer",LoginInfo.data);
dispatch(takeLogindata(LoginInfo.data))
}catch(err){
    console.log(err.message);
}
}

export const GetMyProfileData=async(Id)=>{
    try{
const GetMyprofile=await TokenRequest.get(`/binoy/Getmyprofile/${Id}`)
console.log("GetMyprogile data vanno?",GetMyprofile.data);
return GetMyprofile.data
    }catch(err){
        console.log(err.message);
    }

}


export const UpdateMydata=async(data,id)=>{
    try{
const updateData=await TokenRequest.put(`/binoy/updateData/${id}`,data)
console.log("updatedata",updateData);
    }catch(err){

    }
}

export const deleteMydata=async(id,dispatch)=>{
  
    try{
await axios.delete(`http://localhost:5000/binoy/deletedata/${id}`)
alert('Are you sure you want to delete account',dispatch(LogoutData()))
    }catch(err){

    }

}


