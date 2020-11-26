import express from 'express'
import auth from './auth.js'
const router = express.Router()
import { getNotes, getNoteById, postNote,deleteNote, updateNote } from '../controllers/noteController.js'

router.route('/').get(getNotes)
router.route('/:id').get(getNoteById).delete(deleteNote).patch(updateNote)
router.route('/').post(postNote)



// router.delete("/delete", auth, async (req, res) => {
//   try {
//     const deleteNote = await Note.findByIdAndDelete(req.note)
//     res.json(deleteNote)
//   } catch (err) {
//     res.status(500).json({error: err.message})
//   }
// })

export default router




