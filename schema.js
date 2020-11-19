import mongoose from 'mongoose'


const noteSchema = mongoose.Schema({
    category: String,
    label:String,
    content:String,
    
})
