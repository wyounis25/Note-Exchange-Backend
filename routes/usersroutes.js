import express from 'express';
import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const userrouter = express.Router();

// DESC FETCH ALL NOTES
// ROUTE  GET  NOTE
// ACESS PUBLIC

userrouter.get(
	'/',
	asyncHandler(async (req, res) => {
		const users = await User.find({});
		res.json(users);
	})
);

// DESC FETCH SINGLE NOTES
// ROUTE  GET  NOTE/:ID
// ACESS PUBLIC

userrouter.get(
	'/:id',
	asyncHandler(async (req, res) => {
		const user = await User.findById(req.params.id);
		if (user) {
			res.json(user);
		} else {
			res.status(404).json({ message: 'note not found' });
		}
	})
);

userrouter.post(
	'/',
	asyncHandler(async (req, res) => {
		try {
			let { name, username, password } = req.body;

			//validations

			if (!name || !username || !password) return res.status(400).json({ msg: 'Please fill in all fields' });
			if (password.length < 6) return res.status(400).json({ msg: 'minimum of six characters' });
			const existingUser = await User.findOne({ username });
			if (existingUser) return res.status(400).json({ msg: 'user with this username already exist' });
			if (!name) name = username;
			const salt = await bcrypt.genSalt();
			const passwordHash = await bcrypt.hash(password, salt);

			const newUser = new User({
				name,
				username,
				password: passwordHash
			});
			const savedUser = await newUser.save();
			res.json(savedUser);
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	})
);

userrouter.post(
	'/login',
	asyncHandler(async (req, res) => {
		try {
			const { username, password } = req.body;

			//validation
			if (!username || !password) return res.status(400).json({ msg: 'Please fill in all the blanks' });
			const user = await User.findOne({ username });
			if (!user) return res.status(400).json({ msg: 'No account found' });
			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });
			const token = jwt.sign({ id: user._id }, process.env.JWT_PASS);
			res.json({
				token,
				user: {
					id: user._id,
					name: user.name,
					username: user.username
				}
			});
		} catch (err) {
			res.status(500).json({ error: err.message });
		}
	})
);

userrouter.post('/tokenIsValid', async (req, res) => {
	try {
		const token = req.header('x-auth-token');
		if (!token) return res.json(false);
		const verified = jwt.verify(token, process.env.JWT_PASS);
		if (!verified) return res.json(false);

		const user = await User.findById(verified.id);
		if (!user) return res.json(false);
		return res.json(true);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});

export default userrouter;
