import mongoose from 'mongoose';

const transactionsSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: 'User'
		},
		amount: {
			type: Number,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		notes: [
			{
				note: {
					type: mongoose.Schema.Types.ObjectId,
					required: true,
					ref: 'Notes'
				}
			}
		]
	},
	{
		timestamps: true
	}
);

const Transaction = mongoose.model('Transaction', transactionsSchema);
export default Transaction;
