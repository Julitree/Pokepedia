import { fetchPokemonTypes } from '../api/call-a-pokemon-img-type-api';
import { cardFlipAnimation } from '../util/cardFlipAnimation';

let productListContainer = document.getElementById('productListContainer');
let cardWrapper = document.createElement("div");
cardWrapper.classList.add("cardWrapper");
cardWrapper.setAttribute("id", "vamos");

let cardContainer;
const createCard = (pokeDateApi) => {
    // @checkAbilities crea lista con todas las habilididades
    let checkAbilities = pokeDateApi.abilities.map(item => {
        let p = document.createElement("p");
        let resultAbilities = p.innerText = item.ability.name;
        return resultAbilities;
    });

    let checkImgSvg = (picturePokemon) => {
        if (picturePokemon.sprites.other.dream_world.front_default != null) {
            let imgSvg = picturePokemon.sprites.other.dream_world.front_default
            return imgSvg
        } else if (picturePokemon.sprites.other.dream_world.front_default == null && picturePokemon.sprites.front_default == null) {
            return `<p>No Image</p>`;
        } else {
            let imgPng = picturePokemon.sprites.front_default;
            return imgPng
        }
    }

    cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");
    cardContainer.setAttribute("id", "cardContainer");

    cardContainer.innerHTML += ` 
        <div  class="card-front">
            <p class="pokemonTitleName">${pokeDateApi.name}</p>
            <div class="imgContainer">
                <img src="${checkImgSvg(pokeDateApi)}"/>
            </div>
        </div>
        <div class="card-back" id="card-back">
            <h2 class="title">Height</h2>
            <p class="infoPokeback">${pokeDateApi.height}</p>
            <h2 class="title">Weight</h2>
            <p class="infoPokeback">${pokeDateApi.weight}</p>
            <h2 class="title">Abilities</h2>
            <p>${checkAbilities}</p>
        </div>
    `


    productListContainer.appendChild(cardWrapper);
    cardWrapper.appendChild(cardContainer);
    cardContainer.addEventListener("click", cardFlipAnimation)
    return cardContainer;
};

let offset = 0;
const displayPokemonList = (pokemon_type, offset = 0) => {
    if (offset === 0) {
        cardWrapper.innerHTML = '';
    }
    cardWrapper.innerHTML = '';
    for (var i = 1; i <= 800; i++) {
        const pokemonListPromise = fetchPokemonTypes(i, offset);
        console.log('hola')
        pokemonListPromise.then((pokemonList) => {
            pokemonList.types.map((element) => {
                if (pokemon_type == element.type.name) {
                    createCard(pokemonList);
                }
            });
        })
    }
};

const handleScroll = (event) => {
    if (Math.ceil(window.scrollY) == (Math.ceil(document.querySelector('body').scrollHeight - window.innerHeight))) {
        offset += 20;
        if (document.getElementById('productListContainer').childElementCount > 1 && offset < 20) {
            displayPokemonList(event, offset)
        }
    }
}



export { displayPokemonList, handleScroll };