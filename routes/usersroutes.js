import express from 'express'
import User from '../models/UserModel.js'
import asyncHandler from 'express-async-handler'
const userrouter = express.Router()

// DESC FETCH ALL NOTES
// ROUTE  GET  NOTE
// ACESS PUBLIC

userrouter.get("/", asyncHandler (async (req, res) => {
  const users = await User.find({})
    res.json(users)
}))
// DESC FETCH SINGLE NOTES
// ROUTE  GET  NOTE/:ID
// ACESS PUBLIC
userrouter.get("/:id", asyncHandler( async(req, res) => {
  const user = await User.findById(req.params.id)
  if (user) {
    res.json(user)

  } else {
    res.status(404).json({message: "note not found"})
  }
}));


export default userrouter