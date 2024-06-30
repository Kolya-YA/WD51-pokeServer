import express from "express";

import createNewFighter from "../controllers/fighter/createNewFighter.js";
import getAllFighters from "../controllers/fighter/getAllFighters.js";
import getTopFighters from "../controllers/fighter/getTopFighters.js";
import getOneFighterById from "../controllers/fighter/getOneFighterById.js";
import deleteFighter from "../controllers/fighter/deleteFighter.js";
import loginFighter from "../controllers/fighter/loginFighter.js";
import updateFighter from "../controllers/fighter/updateFighter.js";

import auth from "../middleware/auth.js";

const fighterRoutes = express.Router();

// Get all pokemon
fighterRoutes.get("/top", getTopFighters);
fighterRoutes.post("/", createNewFighter);
fighterRoutes.post("/login", loginFighter);
fighterRoutes.get("/", auth, getAllFighters);
fighterRoutes.get("/:id", auth, getOneFighterById);
fighterRoutes.put("/:id", auth, updateFighter);
fighterRoutes.delete("/:id", auth, deleteFighter);

export default fighterRoutes;
