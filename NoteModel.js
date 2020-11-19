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
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: true,
			ref: 'User'
		}
    },
    
	{
		timestamps: true
	}
);

const Notes = mongoose.model('Notes',noteSchema)

export default Notes
