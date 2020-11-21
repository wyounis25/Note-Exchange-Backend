import Note from '../models/NoteModel.js'
import asyncHandler from 'express-async-handler'

// DESC FETCH ALL NOTES
// ROUTE  GET  NOTE
// ACESS PUBLIC
const getNotes = asyncHandler (async (req, res) => {
    const notes = await Note.find({})
      res.json(notes)
  })

  // DESC FETCH SINGLE NOTES
// ROUTE  GET  NOTE/:ID
// ACESS PUBLIC
const getNoteById = asyncHandler (async (req, res) => {
    const note = await Note.findById(req.params.id)
    if (note) {
      res.json(note)
  
    } else {
      res.status(404).json({message: "note not found"})
    }
  })

  export { getNoteById, getNotes} 