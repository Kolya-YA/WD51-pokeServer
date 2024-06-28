import express from "express";
import { createNewFighter, getAllFighters } from "../controllers/fighter.js";

const fighterRoutes = express.Router();

// Get all pokemon
fighterRoutes.get("/", getAllFighters);
fighterRoutes.post("/", createNewFighter);

export default fighterRoutes;
