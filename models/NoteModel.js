import mongoose from 'mongoose';

const noteSchema = mongoose.Schema(
	{
		category: {
			type: String,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		content: {
			type: String,
			required: true
		},
		price: {
			type: Number,
			required: true
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		}
    },
	{
		timestamps: true
	}
);

const Notes = mongoose.model('Notes',noteSchema)

export default Notes
