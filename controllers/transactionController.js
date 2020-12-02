import asyncHandler from 'express-async-handler';
import Transaction from '../models/TransactionModel.js';

const getTransaction = asyncHandler(async (req, res) => {
// const user = req.user._id;
const transactions = await Transaction.find(req.params.id).populate('user', 'name');
res.json(transactions);
});

const postTransaction = asyncHandler(async (req, res) => {
	const { user, amount, email, notes} = req.body;
	const newTransaction = await Transaction.create({
		user,
		amount,
		email,
		notes
	});

	if (newTransaction) {
		res.status(200).json(newTransaction);
	} else {
		res.status(400);
		throw new Error('Invalid information');
	}
});

export { getTransaction, postTransaction };
