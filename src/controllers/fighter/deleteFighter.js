const deleteFighter = async (req, res, next) => {
	const id = req.params.id;
	try {
		const fighter = await Fighter.findById(id);

		if (!fighter) {
			throw new Error("Fighter not found");
		}
		if (req.fighter.id !== fighter.id.toString() && !req.fighter.isAdmin) {
			throw new Error("No premition to delete this fighter");
		}

		const deletedFighter = await Fighter.findByIdAndDelete(id);
		res
			.status(200)
			.json({ message: `Fighter '${deletedFighter.name}' deleted` });
	} catch (error) {
		next(error);
	}
};

export default deleteFighter;
