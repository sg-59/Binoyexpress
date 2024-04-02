const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{

    console.log('jsonwebtoken >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',req.headers.token);
   

let authHeader=req.headers.token  


    
if(authHeader){   
jwt.verify(authHeader,process.env.jwtseckey,(err,user)=>{
    if(err) res.status(403).json('token is not valid')
    console.log("********************************************************************",user);
if(user.id==req.params.id){
    next();
}else{
return res.status(403).json("Your Id and token missmatch")
}

})  

}else{ 
    return res.status(401).json('you are not authenticated')
}

};



module.exports={ verifyToken}    