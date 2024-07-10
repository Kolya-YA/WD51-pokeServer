import express from "express";
import getLastBattles from "../controllers/battle/getLastBattles.js";
import postNewBattle from "../controllers/battle/postNewBattle.js";
import getButtlesByUserId from "../controllers/battle/getButtlesByUserId.js";

import auth from "../middleware/auth.js";

const battleRouter = express.Router();

battleRouter.get("/last", getLastBattles);
battleRouter.get("/:userId", auth, getButtlesByUserId);
battleRouter.post("/", auth, postNewBattle);

export default battleRouter;
