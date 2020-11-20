import express from 'express'
import Cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import noteRoutes from './routes/notesroutes.js'

// const connection_url = "mongodb+srv://admin:yzbsrZaIS225waQt@notes.ivma7.mongodb.net/note-exange?retryWrites=true&w=majority"
dotenv.config()
//App Config
const app = express()
const port = process.env.PORT || 8000
 connectDB()
//MiddleWare
// app.use(Cors())
app.use('/notes', noteRoutes)
//API Endpoints
app.get('/',(req,res) => {
    res.status(200).send("HELLO WORLD!!!")
})






//Listener
app.listen(port, () => console.log(`listending on localhost:${port} and running ${process.env.NODE_ENV} mode`))
