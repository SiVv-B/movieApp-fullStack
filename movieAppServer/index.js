const express = require ('express')
const userRoute=require('./routes/MoviesRoutes')
const ConnectDB=require('./config/ConnectDB')
const cors=require('cors')
const PORT = 6000
//instance of express application 
const app=express()
//midelware
app.use(express.json())
app.use('/',userRoute)
app.use(cors())

require('dotenv').config({ path: './config/.env' })
//connexion of the databse
ConnectDB()
//run the server on the port 
app.listen(PORT,()=>{
    console.log('server is running on port '+PORT)
})


