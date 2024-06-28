import Fighter from "../models/fighter.js";

export const createNewFighter = async (req, res, next) => {
    try {
        const newFighter = new Fighter(req.body);
        const savedFighter = await newFighter.save();
        res.status(201).json(savedFighter);
    } catch (error) {
        next(error);
    }
};

export const getAllFighters = async (req, res) => {
    try {
        const fighters = await Fighter.find({});
        res.status(200).json(fighters);
    } catch (error) {
        next(error);
    }
};

export const getTopFighters = async (req, res) => {
	res.status(200).json({ message: "Top fighters" });
};

export const getOneFighterById = async (req, res) => {
	const id = req.params.id;
	res.status(200).json({ message: `Fighter with ID: '${id}'` });
};

export const updateFighter = async (req, res) => {
	const id = req.params.id;
	const body = req.body;
	console.log(body);
	res.status(200).json({ message: `Fighter with ID: '${id}' updated` });
};

export const deleteFighter = async (req, res) => {
	const id = req.params.id;
	res.status(200).json({ message: `Fighter with ID: '${id}' deleted` });
};
