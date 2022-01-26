    
  let pokemonRepository = (function() {
        

        let pokemonList = [];

        function add(pokemon) {
          pokemonList.push(pokemon);
        }
        
        
        function getAll() {
          return pokemonList;
        }
      
        return {
          add: add,
          getAll: getAll
        };
    })
             
                
                function pokemon() {

                    let  pokeList = [{
                        name:  "Bulbasaur",
                        height: 7,
                        type: ["grass, poison"],},
                        {
                        name:  "chamander",
                        height: 8,
                        type: ["fire, stone"]},
                        {
                        name:  "Squirtle",
                        height: 4,
                        type: ["water, stone"]}];
        
        function getPokeName(name) {
            return "Name: " + name + "<br>";
        }

        function getPokeHeight(height) {
            return "height: " + height + " feed";
        }

        function getPokeType(type) {
            return "type: " + type + + " "+ "<br>"+ "<br>";
        }

        function getPokemon(poke) {
            let pokeName = getPokeName(poke.name);
            let pokeHeight = getPokeHeight(poke.height);
            let pokeType = getPokeType(poke.type);
        
            
            


        if (pokeList.height > 7) {
       
           document.write(pokeName + pokeHeight + "<-wow thats big!!!!, " + pokeType); // let loop appear with if in site
          
          } 
       else {
           document.write(pokeName +  pokeHeight + pokeType);
          
       }
    } 
    pokeList.forEach(pokemon);       
   
    getPokemon(); 


}


            
 pokemon();               
 
     

  // pokemonRepository ();




  

//};

/*
 for (let i = 0; i < pokemonList.length; i++) { // create loop for pokemonList
 let namee = pokemonList[i].name; // get Pokemon Name from pokemonList
 let heightt = pokemonList[i].height; // *get Pokemon height from pokemonList
 let typee = pokemonList[i].type; // get Pokemon type from pokemonList


 if (heightt > 7) {

    document.write("name: " + namee + ", " + "<br>" + "height: (" + heightt + ")<-wow thats big!!!!, " + "<br>" + "type: " + typee + " " + "<br>"+"<br>" ); // let loop appear with if in site
   
   } 
else {
    document.write("name: " + namee + ", " + "<br>" + "height: (" + heightt + "), " + "<br>" + "type: " + typee + " "+ "<br>"+ "<br>" ); // let loop appear in site
    console.log (namee, heightt, typee); // call log for the loop
}
}

 
}
printArrayDetails();
printArrayDetails();

 */





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


    pokemonList = {
    name:  "Bulbasaur",
    height: 7,
    type: ["grass, poison"],},
    {
    name:  "chamander",
    height: 8,
    type: ["fire, stone"]},
    {
    name:  "Squirtle",
    height: 4,
    type: ["water, stone"]};
*/