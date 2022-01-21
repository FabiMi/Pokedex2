let pokemonList = [{
    name:  "Bulbasaur",
    height: 7,
    type: ["grass, poison"]
}, {name:  "chamander",
    height: 8,
    type: ["fire, stone"]},
    {name:  "Squirtle",
    height: 4,
    type: ["water, stone"]}];

let i = 0;

for (;pokemonList[i];) { // create loop for pokemonList
 let namee = pokemonList[i].name; // get Pokemon Name from pokemonList
 let heightt = pokemonList[i].height; // *get Pokemon height from pokemonList
 let typee = pokemonList[i].type; // get Pokemon type from pokemonList
 i++; 

 if (heightt > 7) {

    document.write("name: " + namee + ", " + "height: (" + heightt + ")<-wow thats big!!!!, " + "type: " + typee + " "); // let loop appear with if in site
   
   } 
else {
    document.write("name: " + namee + ", " + "height: (" + heightt + "), " + "type: " + typee + " "); // let loop appear in site

}

 console.log (namee, heightt, typee); // call log for the loop
}








/*

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
        displayPokemon(pokemon);
    });
};

const displayPokemon = (pokemon) => {
    console.log(pokemon);
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="card" id="card">
            
            <h2 class="card-title">${pokeman.id}. ${pokeman.name}</h2>
            <img class="card-image" src="${pokeman.image}"/>
            <p class="card-subtitle">Type: ${pokeman.type}</p>
            <p class="card-subtitle">Height: ${pokeman.height} feed</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

let  card = document.getElementById("card");

const card = "fire"

if ("fire") in card =  {

    card.style.backroundColor(yellow);
else

card.style.backroundColor(brown);
}

*/