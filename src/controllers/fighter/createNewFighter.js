import Fighter from "../../models/fighter.js";

const createNewFighter = async (req, res, next) => {
	try {
		const newFighter = new Fighter(req.body);
		const savedFighter = await newFighter.save();
		res.status(201).json(savedFighter);
	} catch (error) {
		next(error);
	}
};

export default createNewFighter;