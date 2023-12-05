const connectDB = require('./db/db_connect')
const express = require('express')
const tasks = require('./routes/tasks')
const app = express()
const port = process.env.PORT || 3000
require('dotenv').config()


// middleware to use static file
app.use(express.static('./public'))


//middleware to parse json data 
app.use(express.json())




//middleware for routes
app.use('/api/v1/tasks',tasks)


//Connecting the DB 
const start = async () =>{

    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port , ()=>{
            console.log(`The server is running on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}


start()