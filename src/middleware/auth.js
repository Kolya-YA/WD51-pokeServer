import jwt from "jsonwebtoken";
import config from "../utils/config.js";
import logger from "../utils/logger.js";

export default (req, _, next) => {
	logger.info("Auth middleware called");
	// const authHeader = req.get("authorization");
	const authHeader = req.headers.authorization;

	if (!authHeader?.startsWith("Bearer ")) {
        return next(new Error("Token is missing or malformed"));
    }
    
    const token = authHeader.replace("Bearer ", "");
	try {
		const decodedToken = jwt.verify(token, config.JWT_SECRET);
		req.fighter = decodedToken;
		next();
	} catch (error) {
		next(error);
	}
};
