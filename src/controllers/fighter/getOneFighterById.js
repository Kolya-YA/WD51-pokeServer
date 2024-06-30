import Fighter from "../../models/fighter.js";

const getOneFighterById = async (req, res, next) => {
	const id = req.params.id;

	try {
		const fighter = await Fighter.findById(id);

		if (!fighter) {
			throw new Error("Fighter not found");
		}
		if (req.fighter.id !== fighter.id.toString() && !req.fighter.isAdmin) {
			throw new Error("No premition to take full info of this fighter");
		}

		res.status(200).json(fighter);
	} catch (error) {
		next(error);
	}
};

export default getOneFighterById;
