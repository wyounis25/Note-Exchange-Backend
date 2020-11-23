import User from '../models/UserModel.js';
import asyncHandler from 'express-async-handler';
import gentoken from '../util/token.js';
import jwt from 'jsonwebtoken';

// DESC FETCH ALL USER
// ROUTE  GET  USER
// ACESS PUBLIC
const getUser = asyncHandler(async (req, res) => {
	const users = await User.find({});
	res.json(users);
});

// DESC FETCH SINGLE USER
// ROUTE  GET  USER/:ID
// ACESS PUBLIC
const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ message: 'note not found' });
	}
});

const authUser = asyncHandler(async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	const token = jwt.sign({ id: user._id }, "secretshh");

	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			username: user.username,
			token: token
		});
	} else {
		res.status(401);
		throw new Error('Invalid username or password');
	}
});

const registerUser = asyncHandler(async (req, res) => {
	const { name, username, password } = req.body;
	if (!name || !username || !password) return res.status(400).json({ msg: 'Please fill in all fields' });
	if (password.length < 6) return res.status(400).json({ msg: 'minimum of six characters' });
	const existingUser = await User.findOne({ username });
	const token = jwt.sign({ id: user._id }, "secretshh");
	if (existingUser) return res.status(400).json({ msg: 'user with this username already exist' });

	const user = await User.create({
		name,
		username,
		password
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			username: user.username,
			token: token
		});
	} else {
		res.status(400);
		throw new Error('Invalid user data');
	}
});

const getUserProfile = asyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.json({
			_id: user._id,
			name: user.name,
			username: user.username
		});
	} else {
		res.status(404);
	}
});

export { authUser, getUser, getUserById, getUserProfile, registerUser };
