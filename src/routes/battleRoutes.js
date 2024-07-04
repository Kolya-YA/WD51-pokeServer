import express from 'express';
import getLastBattles from '../controllers/battle/getLastBattles.js';
import postNewBattle from '../controllers/battle/postNewBattle.js';
import getButtlesByUserId from '../controllers/battle/getButtlesByUserId.js';

const battleRouter = express.Router();

battleRouter.get("/last", getLastBattles);

battleRouter.get('/:userId', getButtlesByUserId); // TODO: Add auth middleware

battleRouter.post("/", postNewBattle); // TODO: Add auth middleware


export default battleRouter;