const mongoose = require('mongoose')
require('dotenv').config()

uri=process.env.URL

console.log(uri)

    mongoose.connect(URL="",
    {useUnifiedTopology: true , useNewUrlParser: true })
    .then(()=>console.log('mongoose is connected'))
 .catch((err)=>console.log(err))

// mongoose.connection.on('connected'),()=>console.log('mongoose is connected to db')

// mongoose.connection.on('error',(error)=>console.log(error))

// mongoose.connection.on('disconnected', () => {
//     console.log('Mongoose connection is disconnected.')
//   })
  
//   process.on('SIGINT', async () => {
//     await mongoose.connection.close()
//     process.exit(0)
//   }) 