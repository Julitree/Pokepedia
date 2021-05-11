import { homeView, listView, searchedView, randomView } from "./views/routerApp";
import { handleScroll } from "./views/addContentTypeListView";
import { toggleDarkLight } from "./util/dark_Light_Mode";
import './styles/styles.scss';

window.onload = function() {
    addListeners();
};

let idHomeNav = document.getElementById("idHomeNav");
let backHome = document.querySelector(".backHome");
let getPokemon = document.getElementById("getPokemon");
let randomPokemo = document.getElementById("randomPokemo");
let darkSwitch = document.getElementById('switch-label');


const addListeners = () => {
    idHomeNav.addEventListener("click", homeView);
    backHome.addEventListener("click", homeView);
    getPokemon.addEventListener("click", searchedView);
    darkSwitch.addEventListener("click", toggleDarkLight);
    randomPokemo.addEventListener("click", randomView);
    document.querySelector('body').onscroll = handleScroll;

};