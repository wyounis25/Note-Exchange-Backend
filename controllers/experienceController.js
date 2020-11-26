// import asyncHandler from 'express-async-handler'
// import Experience from '../models/ExperienceModel.js'

// const getExp = asyncHandler(async(req,res)=> {
//     const exp = await Experience.find({})
//     res.json(exp)
// })

// const getExpById = asyncHandler(async(req, res)=> {
//     const exp = await Experience.findById(req.params.id)
//     if (exp) {
//         res.json(exp)
    
//     }else {
//         res.status(404).json({message: "exp not found"})
//     }
// })

// const postExp = asyncHandler(async(req,res) => {
//     const { review, rating, user,note} = req.body
//     const exp = await Experience.create({
//         review,
//         rating,
//         user,
//         note,
//     })
//     if(exp) {
//         res.status(200).json(newNote);

//     } else {
//         res.status(400)
//         throw new Error('Invalid information')
//     }
// })
// export { getExp, getExpById, postExp}

