import Fighter from "../../models/fighter.js";

const getTopFighters = async (req, res, next) => {
	try {
		const fighters = await Fighter.find({});
		res.status(200).json(fighters);
	} catch (error) {
		next(error);
	}
};

export default getTopFighters;