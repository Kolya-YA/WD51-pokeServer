import Battle from "../../models/battle.js";

const getLastBattles = async (req, res, next) => {
	try {
		const battles = await Battle.find({})
			.sort({ fightDate: -1 })
			.limit(10)
			.populate({ path: "fighterID", select: "name fights -_id" });
		res.status(200).json(battles);
	} catch (error) {
		next(error);
	}
};

export default getLastBattles;
