import jwt from 'jsonwebtoken';

const gentoken = (id) => {
	jwt.sign({ id }, process.env.JWT_PASS, {
		expiresIn: '40d'
	});
};

export default gentoken;
