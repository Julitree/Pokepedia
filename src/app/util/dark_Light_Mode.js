function toggleDarkLight() {
    const homeContainer = document.getElementById("home");
    const siteHeader = document.getElementById("site-header");
    const navDarkMode = document.getElementById("light-mode-nav");
    const searchPokemon = document.getElementById("searchPokemon");
    const getPokemon = document.getElementById("getPokemon");
    const randomPokemo = document.getElementById("randomPokemo");

    homeContainer.classList.toggle('dark-mode');
    siteHeader.classList.toggle('dark-mode-header');
    navDarkMode.classList.toggle('dark-mode-nav');
    searchPokemon.classList.toggle('dark-mode-search');
    getPokemon.classList.toggle('dark-mode-search');
    randomPokemo.classList.toggle('dark-mode-btn');
}

export { toggleDarkLight };