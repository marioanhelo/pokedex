var axios = require('axios');

function getPokemonData(ID){
    var config = {
        method:'get',
        url:`https://pokeapi.co/api/v2/pokemon/${ID}`,
        headers:{}
    };
    axios(config)
        .then(function (response){
        createCardPokemon(response);
    })
    .catch(function (error){
        console.error(error)
    });
}


function createCardPokemon(pokemon){
    console.log(pokemon.data.sprites.front_default)
    console.log(pokemon.data.name)
    console.log(pokemon.data.id)
}



function getPokemons(start,finish){
    for (let i = start; i <= start + finish; i++) {
        getPokemonData(i);
      }
}

getPokemons(1,10)