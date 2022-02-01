
const User = require('../models/user.models')

module.exports={
   details: async(req,res,next)=>{
    res.send('details route')
    console.log('running controller')
},
    register:async(req,res,next)=>{
        try{ 
        // console.log(typeof(req.body))
        const userData = req.body
        const doesExist=await User.findOne({email:userData.email})
        console.group(doesExist)
        console.log(typeof(doesExist))
        if(doesExist){ 
            res.send(`${userData.email} is already been registered`)
            // console.log('asjdhfasd')
        }else{

        const user= new User(userData)
        const savedUser=await user.save()
        res.send(savedUser)

        }
    }catch(err){
            console.log(err)
            res.send(err)
        }

    },
    login: async(req,res,next)=>{
        try{
            const userData=req.body
            const user= await User.findOne({email:userData.email})
            console.log(user)
            const isMatch = await user.isValidPassword(userData.password)
            console.log(isMatch)
            if(!isMatch){
                res.send('email / password is not valid')
            }else{
            res.send('working')
            }
             // create refresh and access token
        }catch(err){
            console.log(err)
            res.send(err)
        }
    }

}