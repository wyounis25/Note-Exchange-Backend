import express from 'express'
import auth from './auth.js'
const transactionRouter = express.Router()
import {getTransaction, postTransaction } from '../controllers/transactionController.js'


transactionRouter.route('/').get(getTransaction)
transactionRouter.route('/').post(postTransaction)

export default transactionRouter