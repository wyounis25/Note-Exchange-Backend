import mongoose from 'mongoose'
import User from './models/UserModel.js'
import Note from './models/NoteModel.js'
import users from './data/User.js'
import notes from './data/Note.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Note.deleteMany()

       const createUser =  await User.insertMany(users)

       const createNote = notes.map(note => {
           return {...note, user: createUser[0]._id}
       })
       await Note.insertMany(createNote)



       console.log('SEEDED')
       process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}
const destroyData = async () => {
    try {
        await User.deleteMany()
        await Note.deleteMany()
       console.log('DESTROY')
       process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}
