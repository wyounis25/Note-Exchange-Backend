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
			ref: true,
			ref: 'Notes'
		},
		rating: {
			type: Number,
			ref: true,
			default: 0
		}
    },
	{
		timestamps: true
    }
    
);

const Experience = mongoose.model('Experience',experienceSchema)
export default Experience
