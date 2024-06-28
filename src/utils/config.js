const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

const corsOptions = {
	origin: process.env.ORIGINS.split(", "),
};

export default { PORT, MONGODB_URI, corsOptions };