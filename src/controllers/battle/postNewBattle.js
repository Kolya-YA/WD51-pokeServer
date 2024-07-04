import Battle from "../../models/battle.js";
import Fighter from "../../models/fighter.js";

const postNewBattle = async (req, res, next) => {
	try {
		const battleData = req.body;
		const updatedFighter = await Fighter.findByIdAndUpdate(
			battleData.fighterID,
			{
				$inc: {
					"fights.total": 1,
					"fights.score": battleData?.score || 0,
					"fights.wins": battleData?.result === "win" ? 1 : 0,
					"fights.losses": battleData?.result === "loss" ? 1 : 0,
				},
			},
			{ new: true },
		);
		battleData.score = undefined;
		if (!updatedFighter) {
			throw new Error("Fighter not found");
		}
		updatedFighter.password = undefined;
		const newBattle = new Battle(battleData);
		const savedBattle = await newBattle.save();

		res.status(200).json({
			message: "Fighter updated and new battle created",
			updatedFighter,
			savedBattle,
		});
	} catch (error) {
		next(error);
	}
};

export default postNewBattle;
