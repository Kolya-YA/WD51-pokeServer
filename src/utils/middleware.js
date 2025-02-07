import logger from "./logger.js";

export const requestLogger = (req, res, next) => {
	logger.info("Method:", req.method);
	logger.info("Path:  ", req.path);
	logger.info("Body:  ", req.body);
	logger.info("---");
	next();
};

export const unknownEndpoint = (req, res) => {
	res.status(404).send({ error: "Unknown endpoint" });
};