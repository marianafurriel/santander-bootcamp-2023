// function convertPokemonTypesToLi(pokemonTypes) {
//   return pokemonTypes.map((typeSlot) => {
//     return `<li class="type">${typeSlot.type.name}</li>`;
//   });
// }

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon ${pokemon.type}">
  <span class="number">#${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">  
    <ol class="types">
    ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join("")}
    </ol>
    <img src="${pokemon.photo}"
      alt="${pokemon.name}">
  </div>
</li>`;
}

const pokemonList = document.getElementById("pokemonList");
pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join(""); //mapeia os pokemons para uma lista de elementos li, junta esses elementos em uma string só e atribui isso ao html da ol de pokemons
});
