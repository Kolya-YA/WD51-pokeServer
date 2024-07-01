import Fighter from "../../models/fighter.js";

const getTopFighters = async (req, res, next) => {
	try {
		// TODO: Add conditions to filter top of fighters 
		const fighters = await Fighter.find({}).select('name fights'); 
		res.status(200).json(fighters);
	} catch (error) {
		next(error);
	}
};

export default getTopFighters;