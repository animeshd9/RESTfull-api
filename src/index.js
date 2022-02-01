const express = require("express")
const morgan = require("morgan")
const authRoute = require('./routes/user.routes')
require('dotenv').config()
require('./config/mongodb')


const app=express()


const port=process.env.PORT || 3000
// console.log(port)

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))


app.get("/",(req,res,next)=>{
    res.send("live from index.js")
    console.log('index running')
    
})

app.use('/auth',authRoute)

app.listen(port,()=>console.log(`Server is running on ${port}`))