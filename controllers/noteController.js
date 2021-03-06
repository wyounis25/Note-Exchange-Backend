import Note from '../models/NoteModel.js';
import asyncHandler from 'express-async-handler';

// DESC FETCH ALL NOTES
// ROUTE  GET  NOTE
// ACESS PUBLIC

const getNotes = asyncHandler(async (req, res) => {
	const notes = await Note.find({});
	res.json(notes);
});

// DESC FETCH SINGLE NOTES
// ROUTE  GET  NOTE/:ID
// ACESS PUBLIC

//GET
const getNoteById = asyncHandler(async (req, res) => {
	const note = await Note.findById(req.params.id);
	if (note) {
		res.json(note);
	} else {
		res.status(404).json({ message: 'note not found' });
	}
});

//POST
const postNote = asyncHandler(async (req, res) => {
	const { category, label, content, price, user } = req.body;
	const newNote = await Note.create({
		category,
		label,
		content,
		price,
		user
	});

	if (newNote) {
		res.status(200).json(newNote);
	} else {
		res.status(400);
		throw new Error('Invalid information');
	}
});
//POST EXPERIENCE

const postReview = asyncHandler(async (req, res) => {
	const { review, rating } = req.body;
	const note = await Note.findById(req.params.id);

	if (note) {
		const alreadyReviewd = note.experiences.find((r) => r.user.toString() === req.user._id.toString());

		if (alreadyReviewd) {
			res.status(400);
			throw new Error('Note already reviewd');
		}

		const newNote = await Note.create({
			name: req.user.name,
			review,
			rating: Number(rating),
			user: req.user._id
		});

		note.experiences.push(newNote);
		res.status(201).json({ message: 'Review added' });
	} else {
		res.status(404);
		throw new Error('notes not found');
	}

	if (newNote) {
		res.status(200).json(newNote);
	} else {
		res.status(400);
		throw new Error('Invalid information');
	}
});

// UPDATE
const updateNote = asyncHandler(async (req, res) => {
	const { category, label, content, price } = req.body;
	const note = await Note.findById(req.params.id);

	if (note) {
		note.category = category;
		note.label = label;
		note.content = content;
		note.price = price;

		const updateNote = await note.save();
		res.json(updateNote);
	} else {
		res.status(404);
		throw new Error('PRODUCT NOT FOUND');
	}
});
// UPDATE
const updateReview = asyncHandler(async (req, res) => {
	const { review, rating, user, name } = req.body;
	const note = await Note.findById(req.params.id);

	if (note) {
		const experience = {
			review,
			rating,
			user,
			name 
		};
		note.experiences.push(experience);
		const updateNote = await note.save();
		res.json(updateNote);
	} else {
		res.status(404);
		throw new Error('PRODUCT NOT FOUND');
	}
});

//DELETE
const deleteNote = asyncHandler(async (req, res) => {
	const notes = await Note.findById(req.params.id);
	if (notes) {
		await notes.remove();
		res.json({ msg: 'deleted' });
	} else {
		res.status(500).json({ error: err.message });
	}
});

export { getNoteById, getNotes, postNote, deleteNote, updateNote, postReview, updateReview };
