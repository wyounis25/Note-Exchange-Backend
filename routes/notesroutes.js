import express from 'express'
import Note from '../models/NoteModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

// DESC FETCH ALL NOTES
// ROUTE  GET  NOTE
// ACESS PUBLIC

router.get("/", asyncHandler (async (req, res) => {
  const notes = await Note.find({})
    res.json(notes)
}))
// DESC FETCH SINGLE NOTES
// ROUTE  GET  NOTE/:ID
// ACESS PUBLIC
router.get("/:id", asyncHandler( async(req, res) => {
  const note = await Note.findById(req.params.id)
  if (note) {
    res.json(note)

  } else {
    res.status(404).json({message: "note not found"})
  }
}));
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

export default router




