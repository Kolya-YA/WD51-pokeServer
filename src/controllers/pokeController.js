import pokeBase from '../data/pokeBase.js';

const pokeTypes = [...new Set(pokeBase.flatMap(pokemon => pokemon.type))];


export const getAllPokemons = (req, res) => {
    res.status(200).json({ qtyOfPokemons: pokeBase.length, pokeBase });
}

export const getOnePokemonById = (req, res) => {
    const id = +req.params.id;
    const pokemon = pokeBase.find(p => p.id === id);
    if (!pokemon) {
        res.status(404).json({ message: 'Pokemon not found' });
    } else {
        res.status(200).json({ pokemon });
    }
}

export const getTypesOfPokemons = (req, res) => {
    res.status(200).json({ qtyOfTypes: pokeTypes.length, pokeTypes });
}
    
export const getPokemonsByType = (req, res) => {
    const type = req.params.type;
    const oneTypePokeBase = pokeBase.filter(p => p.type.map(t => t.toLocaleLowerCase()).includes(type.toLocaleLowerCase()));
    res.status(200).json({ qtyOfPokemons: oneTypePokeBase.length, oneTypePokeBase });
}