import Fighter from "../../models/fighter.js";

const updateFighter = async (req, res, next) => {
	const id = req.params.id;
	const body = req.body;
	const updateData = {
		name: body?.name,
		email: body?.email,
		isAdmin: body?.isAdmin,
		fights: {
			total: body?.fights?.total,
			wins: body?.fights?.wins,
			losses: body?.fights?.losses,
		},
	};
	try {
		if (req.fighter.id !== id && !req.fighter.isAdmin) {
			throw new Error("No premition to update this fighter");
		}

		const updatedFighter = await Fighter.findByIdAndUpdate(id, updateData, {
			new: true,
            runValidators: true,
		});
		if (!updatedFighter) {
			throw new Error("Fighter not found");
		}

		res.status(200).json(updatedFighter);
	} catch (error) {
		next(error);
	}
};

export default updateFighter;
