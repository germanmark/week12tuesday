const bulbasaur = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png";
const charmander = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png";
const squirtle = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png";

function injectPokemon(src, alt){
    document.body.insertAdjacentHTML(`beforeend`,
                                `<img src="${src}" alt="${alt}">`);
}

function choosePokemon(event){
    Cookies.set(`imageUrl`, event.target.getAttribute(`src`));
    location.href = "/display.html";
}

injectPokemon(bulbasaur, "Bulbasaur");
injectPokemon(charmander,"Charmander");
injectPokemon(squirtle, "Squirtle");

let images = document.querySelectorAll(`img`);

for (img of images){
    img.addEventListener(`click`, choosePokemon);
}
// Equivalent
// for (let i=0; i<images.length; i++){
//     images[i].addEventListener(`click`, choosePokemon);
// }