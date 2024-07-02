import Fighter from "../../models/fighter.js";

const createNewFighter = async (req, res, next) => {
	try {
		const newFighter = new Fighter(req.body);
		const savedFighter = await newFighter.save();
		const token = newFighter.createAuthToken();
		
		res.status(201).json({
			message: "Fighter created",
			fighter: {
				token,
				isAdmin: savedFighter.isAdmin,
				name: savedFighter.name,
				id: savedFighter._id.toString(),
			},
		});
	} catch (error) {
		next(error);
	}
};

export default createNewFighter;