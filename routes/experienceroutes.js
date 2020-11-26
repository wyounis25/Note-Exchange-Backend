import express from 'express'
const router = express.Router()
import { getExp, getExpById, postExp} from '../controllers/experienceController.js'


router.route('/').get(getExp).post(postExp)
router.route('/:id').get(getExpById)


export default router