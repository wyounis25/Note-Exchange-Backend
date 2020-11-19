import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'

const connection_url = "mongodb+srv://admin:yzbsrZaIS225waQt@notes.ivma7.mongodb.net/admin?retryWrites=true&w=majority"
//App Config
const app = express()
const port = process.env.PORT || 2525


//MiddleWare
app.use(Cors())

//API Endpoints
app.get('/',(req,res) => res.status(200).send("HELLO WORLD!!!"))

//Listener
app.listen(port, () => console.log(`listending on localhost:${port}`))