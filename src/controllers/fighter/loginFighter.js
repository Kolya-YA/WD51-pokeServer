import Fighter from "../../models/fighter.js";

const loginFighter = async (req, res) => {
	try {
		const { email, password } = req.body;
		const fighter = await Fighter.findOne({ email });
		if (!fighter) {
			return res.status(401).json({ error: "Invalid email or password" });
		}
		const passwordCorrect = await fighter.checkPassword(password);
		if (!passwordCorrect) {
			return res.status(401).json({ error: "Invalid email or password" });
		}
		const token = fighter.createAuthToken();
		return res.status(200).json({
			message: "Login successful",
			token
		});
	} catch (error) {
		res.status(500).json({ error: "Authentification error" });
	}
	res.status(200).json({ message: "Login successful" });
};

export default loginFighter;
