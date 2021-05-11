import { PokemonNoFound } from '../utils/pokemon.util'

const fetchPokemonByName = async(name) => {
    PokemonNoFound.tooglePokeLoader();
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const pokemonListRequest = await fetch(endPoint)
        .catch((error) => console.log(error));

    if (pokemonListRequest.status !== 200) {
        PokemonNoFound.handleError({ message: 'Error' });
        PokemonNoFound.tooglePokeLoader();
        return Promise.reject;
    }
    const pokemonAnswer = await pokemonListRequest.json();
    PokemonNoFound.tooglePokeLoader();
    return pokemonAnswer;
}

export { fetchPokemonByName };