class PokemonNoFound {
    constructor() {}
    static handleError(error) {
        const pokemonHTMLStringError =
            `<div class="">
			<p class=""> Error: Hubo un problema con la petición Fetch - ${error.message}</p>
		</div>`
        document.getElementById('productListContainer').innerHTML = pokemonHTMLStringError;
    }
    static tooglePokeLoader() {
        document.getElementById('loader').classList.toggle('is-hidden');
    }
}

export { PokemonNoFound };