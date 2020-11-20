import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import note from './data/Note.js'
import dotenv from 'dotenv'

const connection_url = "mongodb+srv://admin:yzbsrZaIS225waQt@notes.ivma7.mongodb.net/admin?retryWrites=true&w=majority"
dotenv.config()
//App Config
const app = express()
const port = process.env.PORT || 2525

//MiddleWare
// app.use(Cors())

// mongoose.connect(connection_url, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useUnifiedTopology: true
// });

//API Endpoints
app.get('/',(req,res) => {
    res.status(200).send("HELLO WORLD!!!")
})

// app.post("/notes/", (req, res) => {
//     const notes = req.body;
    
//     note.create(notes, (err, data) => {
//         if (err) {
//             res.status(500).send(err);
//         } else {
//             res.status(201).send(data);
//         }
//     });
// });


app.get("/notes", (req, res) => {
	note.find((err, data) => {
		if (err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(data);
		}
	});
});


//Listener
app.listen(port, () => console.log(`listending on localhost:${port} and running ${process.env.NODE_ENV} mode`))
