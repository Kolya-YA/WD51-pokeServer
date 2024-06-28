import express from 'express';
import { getAllPokemons, getOnePokemonById, getPokemonsByType, getTypesOfPokemons } from '../controllers/poke.js';

const pokeRouter = express.Router();

// Get all pokemon
pokeRouter.get('/', getAllPokemons);

// Get all pokemon types
pokeRouter.get('/types', getTypesOfPokemons);

// Get all pokemon of some type
pokeRouter.get('/types/:type', getPokemonsByType);

// Get a single pokemon by ID
pokeRouter.get('/:id', getOnePokemonById);


export default pokeRouter;