import express from 'express';
import { getAllPokemons, getOnePokemonById, getPokemonsByType, getTypesOfPokemons } from '../controllers/pokeController.js';

const router = express.Router();

// Get all pokemon
router.get('/', getAllPokemons);

// Get all pokemon types
router.get('/types', getTypesOfPokemons);

// Get all pokemon of some type
router.get('/types/:type', getPokemonsByType);

// Get a single pokemon by ID
router.get('/:id', getOnePokemonById);


export default router;