import mongoose from 'mongoose';

 const connection_url = "mongodb+srv://admin:yzbsrZaIS225waQt@notes.ivma7.mongodb.net/admin?retryWrites=true&w=majority"

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(connection_url, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		});
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
            console.log(`Error: ${error.message}`)
            process.exit(1)
    }
};

export default connectDB