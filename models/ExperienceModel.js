import mongoose from 'mongoose';

const experienceSchema = mongoose.Schema(
	{
		note: {
			type: mongoose.Schema.Types.ObjectId,
			ref: true,
			ref: 'Notes'
		},
		review: {
			type: String,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
			default: 0
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
    },
	{
		timestamps: true
    }
    
);

const Experience = mongoose.model('Experience',experienceSchema)
export default Experience
