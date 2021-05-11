import { fetchPokemonTypes } from '../api/call-a-pokemon-img-type-api';


let containerRandomPokemon = document.getElementById("containerRandomPokemon");
let randomPokemonValue = Math.floor(Math.random() * 150) + 1;
const getRandomPokemon = () => {
    let getPokemonApi = fetchPokemonTypes(randomPokemonValue);
    getPokemonApi.then(pokemonInfo => {
        let getTypes = pokemonInfo.types.map(type => {
            let p = document.createElement("p");
            let resultTypes = p.innerText = type.type.name;
            return resultTypes;
        });

        console.log(getPokemonApi)
        containerRandomPokemon.innerHTML = `
                                          <div class="imgContainer">
                                                <img src=${pokemonInfo.sprites.other.dream_world.front_default}>
                                          </div>
                                          <h1>${pokemonInfo.name}</h1>
                                          <hr>
                                          <div class="firstInfo_container">
                                            <div class="infoSubtitleWrapper">
                                                <h2 class="title">Height</h2>
                                                <p>${pokemonInfo.height}</p>
                                            </div>
                                            <div class="infoSubtitleWrapper">
                                                <h2 class="title">Weight</h2>
                                                <p>${pokemonInfo.weight}</p>
                                            </div>
                                        </div>
                                        <div class="barContainer">
                                            <h2>Experience</h2>
                                            <p>${pokemonInfo.base_experience}<p>
                                        </div>
                                        <div class="barContainer">
                                            <h2>Types</h2>
                                            <p>${getTypes}<p>
                                        </div> `

    })
}
export { getRandomPokemon }