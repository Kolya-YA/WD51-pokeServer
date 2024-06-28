import logger from "./logger.js";

export const requestLogger = (req, res, next) => {
	logger.info("Method:", req.method);
	logger.info("Path:  ", req.path);
	logger.info("Body:  ", req.body);
	logger.info("---");
	next();
};

export const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: "unknown endpoint" });
};

export const errorHandler = (error, req, res, next) => {
	logger.error(error.name);
	logger.error(error.message);

	if (error.name === "CastError") {
		return res.status(400).send({ error: "malformatted id" });
	}
	if (error.name === "ValidationError") {
		return res.status(400).json({ error: error.message });
	}
     if (
		error.name === "MongoServerError" &&
		error.message.includes("E11000 duplicate key error")
	) {
		return response
			.status(400)
			.json({ error: "Уxpected `username` to be unique" });
	}

	if (error.message === "Invalid pokemon ID") {
		return res.status(400).json({ error: error.message });
	}
	next(error);
};
