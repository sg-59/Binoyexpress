const router=require('express').Router()
const user=require('../Model/Userschema')
const Crypto_js=require('crypto-js');
const { verifyToken } = require('../verifyToken');

router.post('/signup', async (req,res)=>{
    console.log("req.body>>>>>>>>>",req.body);
    req.body.Password=Crypto_js.AES.encrypt(req.body.Password,process.env.passkey).toString()
    try{
const newUser=new user({Firstname:req.body.firstname,...req.body})
 const savedUser=await newUser.save()
 console.log("saved User",savedUser);
res.status(200).json(savedUser)
    }catch(err){
res.status(500).json('failed')
    }
})

router.get('/collectionofData',async (req,res)=>{
    console.log("req.query",req.query);
    try{
     const allData=await user.findOne({Email:req.query.abcd})   
res.status(200).json(allData)
    }catch(err){
res.status(500).json(err.message)
    }
})

router.delete('/deletedata/:id',async (req,res)=>{
    console.log("req.body",req.params.id);
    try{
await user.findByIdAndDelete(req.params.id)
res.status(200).json("deleted")
    }catch(err){
res.status(500).json("error")
    }
})

router.put('/updateData/:id',verifyToken, async (req,res)=>{
    console.log("req.quer",req.params.id);
    req.body.Password=req.body.Password ? Crypto_js.AES.encrypt(req.body.Password,process.env.passkey).toString():undefined
    try{
const updateDatats=await user.findByIdAndUpdate(req.params.id,{
    $set:req.body
},{new:true})
res.status(200).json(updateDatats)
    }catch(err){
res.status(500).json("error")
    }
})                                

router.get('/getalldata',verifyToken, async (req,res)=>{
    try{
const allData=await user.find()
res.status(200).json(allData)
    }catch(err){
res.status(500).json(err.message)
    } 
})

router.get('/Getmyprofile/:id',verifyToken,async (req,res,next)=>{
    console.log("second action working");
    try{
const myProfiledta=await user.findById(req.params.id)

res.status(200).json(myProfiledta)
next()
    }catch(err){
res.status(500).json(err.message)
    }
},(req,res,next)=>{
   console.log("last section working",req.params.id); 
   next()
},(req,res,next)=>{
    console.log("finaly get it........");
})

router.get("/filter", async (req,res)=>{
    try{
const data=await user.find({Landmark: 'Kottayam'})
console.log("******",data);
res.status(200).json(data)
    }catch(err){

    }
})

router.delete('/updatequerry', async (req,res)=>{

    try{
await user.deleteOne({Email:"nitheesh@gmail.com"})
res.status(200).json('file deleted')
    }catch(err){
res.status(500).json("error")
    }
})


module.exports=router