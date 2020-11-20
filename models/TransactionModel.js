import mongoose from 'mongoose';

const transactionsSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: true,
			ref: 'User'
		},
		
		note: {
			type: mongoose.Schema.Types.ObjectId,
			ref: true,
			ref: 'Notes'
		}
    },
	{
		timestamps: true
    }
    
);

const Transaction = mongoose.model('Transaction',transactionsSchema)
export default Transaction

