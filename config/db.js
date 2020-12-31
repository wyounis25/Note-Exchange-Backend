import mongoose from 'mongoose';
import dotenv from 'dotenv'



const connection_url = "mongodb+srv://admin:rWh6393k5rjMcH6M@notes.ivma7.mongodb.net/note-exange?retryWrites=true&w=majority"

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