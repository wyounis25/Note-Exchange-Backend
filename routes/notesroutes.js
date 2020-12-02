import express from 'express'
import auth from './auth.js'
const router = express.Router()
import { getNotes, getNoteById, postNote,deleteNote, updateNote,updateReview } from '../controllers/noteController.js'

router.route('/').get(getNotes)
router.route('/:id').get(getNoteById).delete(deleteNote).patch(updateNote)
router.route('/').post(postNote)
router.route('/experiences/:id/').patch(updateReview)


export default router




