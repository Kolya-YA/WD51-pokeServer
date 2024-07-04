import Fighter from "../../models/fighter.js";

const getTopFighters = async (req, res, next) => {
	try {
		const fighters = await Fighter.find({}).select('name fights').sort({ 'fights.score': -1 }).limit(10); 
		res.status(200).json(fighters);
	} catch (error) {
		next(error);
	}
};

export default getTopFighters;