import mongoose from "mongoose";
import config from "./config.js";
import logger from "./logger.js";

const clientOptions = {
	serverApi: { version: "1", strict: true, deprecationErrors: true },
};

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(config.MONGODB_URI, clientOptions);
		logger.info(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		logger.error(`Error: ${error.message}`);
		process.exit(1);
	} finally {
		await mongoose.disconnect();
	}
};

export default connectDB;
