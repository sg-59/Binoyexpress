const router=require('express').Router()
const user=require('../Model/Userschema')
const Crypto=require('crypto-js')
const JWT=require('jsonwebtoken')
 
router.post('/login',async (req,res)=>{
    try{ 
      const findUser=await user.findOne({Email:req.body.email})
     !findUser && res.status(401).json('Invalid Email')
     console.log("***********",findUser);
     const decryptpassword=Crypto.AES.decrypt(findUser.Password,process.env.passkey)
console.log("decrypt password",decryptpassword);
var originalPassword =decryptpassword.toString(Crypto.enc.Utf8);
console.log("original password",originalPassword);

req.body.password != originalPassword && res.status(401).json('invalid password')

const token=JWT.sign({
   id:findUser._id ,
},process.env.jwtseckey,{expiresIn:'5d'})

console.log("token",token);

res.status(200).json({token,Id:findUser._id})

    }catch(err){
        res.status(500).json("error",err.message)
    }
})


module.exports=router