
const fetchPokemon = (name) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((response) => response.json())
    .then((pokemon) => console.log(pokemon));

}


module.exports = fetchPokemon;