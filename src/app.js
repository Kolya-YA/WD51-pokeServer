import express from "express";
import cors from "cors";
import config from "./utils/config.js";
// import logger from './utils/logger.js';
import pokeRoutes from "./routes/pokeRoutes.js";
import connectDB from "./utils/mongo.js";
import { errorHandler, requestLogger, unknownEndpoint } from "./utils/middleware.js";

const app = express();
connectDB();

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(requestLogger);

app.use("/api/v1/pokes", pokeRoutes);

app.use(errorHandler)
app.use(unknownEndpoint);

export default app;
