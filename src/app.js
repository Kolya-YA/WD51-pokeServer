import express from "express";
import cors from "cors";
import config from "./utils/config.js";
import connectDB from "./utils/mongo.js";
import pokeRoutes from "./routes/pokeRoutes.js";
import fighterRoutes from "./routes/fighterRoutes.js";
import battleRoutes from "./routes/battleRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

import { requestLogger, unknownEndpoint } from "./utils/middleware.js";

const app = express();
connectDB();

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(requestLogger);

app.use("/api/v1/pokes", pokeRoutes);
app.use("/api/v1/fighters", fighterRoutes);
app.use("/api/v1/battles", battleRoutes);

app.use(errorHandler);
app.use(unknownEndpoint);

export default app;
