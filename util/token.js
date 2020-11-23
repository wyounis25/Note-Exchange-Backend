import jwt from 'jsonwebtoken';

const gentoken = (id) => {
	jwt.sign({ id }, "chicken", {
		expiresIn: '40d'
	});
};

export default gentoken;
