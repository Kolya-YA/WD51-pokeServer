const getAllFighters = async (req, res) => {

	try {
		const fighters = await Fighter.find({});
		res.status(200).json(fighters);
	} catch (error) {
		next(error);
	}
};

export default getAllFighters;