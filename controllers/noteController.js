import Note from '../models/NoteModel.js'
import asyncHandler from 'express-async-handler'
import User from '../models/UserModel.js'

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

const postNote = asyncHandler( async (req,res)=> {
  const {category, label, content,user} = req.body
  const newNote = await Note.create({
    category,
    label,
    content,
    user
  })
  if (newNote) {
    res.status(200)
  } else {
    res.status(400)
    throw new Error ('Invalid information')
  }
})

  export { getNoteById, getNotes , postNote} 