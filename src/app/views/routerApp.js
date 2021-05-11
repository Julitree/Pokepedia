import { displayPokemonType } from "./home_view";
import { displayPokemonList } from "./addContentTypeListView";
import { getInputValue } from './searchPokemon-view';
import { getRandomPokemon } from './randomPokemon';



let home_container = document.getElementById("home");
let list_container = document.getElementById("list");
let search_container = document.getElementById("searchedPokemonContainer");
let randomPokemon = document.getElementById("randomPokemon");

let homeView = () => {
    home_container.classList.add('active');
    list_container.classList.remove('active');
    search_container.classList.remove('active');
    randomPokemon.classList.remove('active');
    displayPokemonType;
};

let listView = (pokemon_type) => {
    list_container.classList.add('active');
    home_container.classList.remove('active');
    search_container.classList.remove('active');
    randomPokemon.classList.remove('active');
    displayPokemonList(pokemon_type);
};

let searchedView = () => {
    search_container.classList.add('active');
    home_container.classList.remove('active');
    list_container.classList.remove('active');
    randomPokemon.classList.remove('active');
    getInputValue();
};

let randomView = () => {
    randomPokemon.classList.add('active');
    home_container.classList.remove('active');
    list_container.classList.remove('active');
    search_container.classList.remove('active');
    getRandomPokemon();
};

export { homeView, listView, searchedView, randomView };