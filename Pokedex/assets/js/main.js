const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
  return `<li class="pokemon ${pokemon.type}">
  <span class="number">#${pokemon.number}</span>
  <span class="name">${pokemon.name}</span>

  <div class="detail">  
    <ol class="types">
    ${pokemon.types
      .map((type) => `<li class="type ${type}">${type}</li>`)
      .join("")}
    </ol>
    <img src="${pokemon.photo}"
      alt="${pokemon.name}">
  </div>
</li>`;
}

function loadPokemonItems(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons
      .map(
        (pokemon) =>
          `<li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">  
          <ol class="types">${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
          </ol>
          <img src="${pokemon.photo}"
          alt="${pokemon.name}">
        </div>
        </li>`
      )
      .join("");
    pokemonList.innerHTML += newHtml; //mapeia os pokemons para uma lista de elementos li, junta esses elementos em uma string só e atribui isso ao html da ol de pokemons
  });
}

loadPokemonItems(offset, limit);

loadMoreButton.addEventListener("click", () => {
  offset += limit;
  const qtdRecordNextPage = offset + limit;

  if (qtdRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItems(offset, newLimit);
    loadMoreButton.parentElement.removeChild(loadMoreButton);
    return;
  } else {
    loadPokemonItems(offset, limit);
  }
});
