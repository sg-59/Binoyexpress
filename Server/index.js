const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
dotenv.config()

app.use(cors())

app.use(function(req,res,next){
    console.log("first section working");
    next()
})


const userRouter=require('./Router/userRouter')
const loginRouter=require('./Router/login')

mongoose.connect(process.env.MongoUrl).then(()=>{
    console.log("data base are connected");
}).catch((err)=>{
console.log("data base conncetion error");
})

app.use(express.json())
 
app.use('/binoy',userRouter)
app.use('/api',loginRouter)


app.listen(5000,()=>{
    console.log("port 5000 is connected");
})
// http://localhost:5000/binoy/signup



