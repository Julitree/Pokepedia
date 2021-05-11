// export { fetchPokemonTypes };
import { PokemonNoFound } from "../util/PokemonNoFound";

const fetchPokemonTypes = async(typesPokemon) => {
    PokemonNoFound.tooglePokeLoader();
    const endPoint = `https://pokeapi.co/api/v2/pokemon/${typesPokemon}`;
    const pokemonTypeRequest = await fetch(endPoint)
        .catch((error) => console.log(error));
    const pokemonAnswer = await pokemonTypeRequest.json();
    PokemonNoFound.tooglePokeLoader();
    return pokemonAnswer;
}

export { fetchPokemonTypes };