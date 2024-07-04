;
import Battle from "../../models/battle.js";

const getButtlesByUserId = async (req, res, next) => {
    const fighterID = req.params.userId;
	try {
		const battles = await Battle.find({ fighterID }).sort({ fightDate: -1 });
		res.status(200).json(battles);
	} catch (error) {
		next(error);
	}
};

export default getButtlesByUserId;
