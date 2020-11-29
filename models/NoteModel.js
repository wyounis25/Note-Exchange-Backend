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
		},
		experiences: [
			{
				review: {
					type: String,
					required: true
				},
				rating: {
					type: Number,
					required: true,
					default: 0
				},
				user: {
					type: mongoose.Schema.Types.ObjectId,
					ref: 'User'
				},
				name: {
					type: String,
					required: true
				}
			}
		]
	},
	{
		timestamps: true
	}
);

const Note = mongoose.model('Note', noteSchema);

export default Note;
