const pokedex = document.getElementById('pokedex');

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 150; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_shiny'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id,
            height: result.height
        }));
        console.log(pokemon);
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card">
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <img class="card-image" src="${pokeman.image}"/>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <p class="card-subtitle">Height: ${pokeman.height} feet</p>
        </li>
    `
        )   
        .join('');
            

        
        
    pokedex.innerHTML = pokemonHTMLString;
};


fetchPokemon();

