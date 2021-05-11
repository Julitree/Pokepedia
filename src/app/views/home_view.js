import { fetchPokemonTypes } from '../api/call-a-pokemon-img-type-api';
import { listView } from "./routerApp";
import { arraysPokemonTypesImg } from "../util/arrayPokemonTypesNames";

let listTypeContentSelector = document.getElementById("list");

// @pokemonTypeApi = Ruta para llegar al elemento desde la API
// @element = Elementos del array arraysPokemonTypesImg
// @index = Posicion de los elementos, se nesecita para añadirle posicionamiento left a elementos impares
const createListBtnTypes = (pokemonTypeApi, element, index) => {
    let blockImg = document.createElement("div");
    blockImg.setAttribute('id', element.type);
    let typeTitle = document.createElement("p");
    let imgContainer = document.createElement("div");
    let imgPokemon = document.createElement("IMG");

    blockImg.classList.add("types-pokemons__blocks");
    imgContainer.classList.add("types-pokemons__imgContainer");
    typeTitle.classList.add(`${pokemonTypeApi.name}`)
    typeTitle.innerText = element.type
    imgPokemon.setAttribute('src', pokemonTypeApi.sprites.other.dream_world.front_default);

    blockImg.appendChild(typeTitle);
    blockImg.appendChild(imgContainer);
    imgContainer.appendChild(imgPokemon);
    if (index % 2 == 1) blockImg.classList.add("leftAling");

    blockImg.addEventListener("click", (event) => {
        //stopPropagation() de la interfaz Event evita la propagación adicional del evento
        event.stopPropagation();
        let clicked_button = event.target.parentElement;
        //Al darle click me trae el id del elemento padre
        let pokemon_type = clicked_button.getAttribute('id');
        //listView toma el id (fire, water, etc..)
        listView(pokemon_type);
    });
    return blockImg;
}

const displayPokemonType = () => {
    const typesPokemonsContainer = document.getElementById('typesPokemonsContainer');
    arraysPokemonTypesImg.map((element, index) => {
        const pokemonTypePromise = fetchPokemonTypes(element.name);
        pokemonTypePromise.then((pokemonType) => {
            let newImgBlock = createListBtnTypes(pokemonType, element, index);
            typesPokemonsContainer.appendChild(newImgBlock);
        });
    })
}
displayPokemonType();
export { displayPokemonType };