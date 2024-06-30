import logger from "../utils/logger.js";

export default (error, req, res, next) => {
	logger.error('Error: ', error);
	logger.error('Error name: ', error.name);
	logger.error('Error msg: ', error.message);

	if (error.name === "CastError") {
		return res.status(400).send({ error: "malformatted id" });
	}
	if (error.name === "ValidationError") {
		return res.status(400).json({ error: error.message });
	}
	if (error.name === "MongoServerError") {
		return res.status(400).json({ error: error.message });
	}
	if (error.name === "JsonWebTokenError") {
		return res.status(401).json({ error: error.message });
	}
	if (error.message === "Invalid pokemon ID") {
		return res.status(400).json({ error: error.message });
	}
	if (error.message === "Token is missing") {
		return res.status(400).json({ error: error.message });
	}
	if (error.message === "Invalid email or password") {
		return res.status(401).json({ error: error.message });
	}

	res.status(500).json({ name: error.name, error: "Something went wrong", message: error.message});
	// next(error);
};
