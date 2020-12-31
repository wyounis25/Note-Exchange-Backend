import jwt from 'jsonwebtoken'

const auth = (req , res, next) => {
    try {
        const token = req.header("x-auth-token")
        if(!token)
        return res.status(401).json({msg: "no Authentication token, denied"})
        const verified = jwt.verify(token, process.env.JWT_PASS)
        if (!verified)
        return res.status(401).json({msg: "Token verfication failed"})
        res.user = verified.id
        next()
    } catch (err) {
        
        return res.status(500).json({error: err.message})
    }

}
export default auth;