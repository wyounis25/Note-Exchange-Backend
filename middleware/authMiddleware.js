import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';

const protect = asyncHandler(async (req, res, next) => {
	let token;

	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_PASS)

            req.user = await (await User.findById(decoded.id)).isSelected('-password')

        } catch (error) {
                console.error(error)
                res.status(401)
                throw new Error('Not Autherized')
        }
	}
	if (!token) {
		res.status(401);
		throw new Error('Not Authorized');
	}
});

export { protect };
