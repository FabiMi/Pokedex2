// create IIFE repository  
  let pokemonRepository = (function() {
        
// Pokemonlist Array (source)

        let pokemonList = [{
        name:  "Bulbasaur",
        height: 7,
        type: ["grass, poison"],
    },
    {
        name:  "chamander",
        height: 8,
        type: ["fire, stone"]
    },
    {
        name:  "Squirtle",
        height: 4,
        type: ["water, stone"]
    }];

//function get and add pokemon

        function add(pokemon) {
          pokemonList.push(pokemon);
        }
        
        
        function getAll() {
          return pokemonList;
        }
      
//expose functions to the "outside"        
        return {
          add: add,
          getAll: getAll
        };
    })();
             

        pokemonRepository.getAll().forEach(pokemon => {
        
/*
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
        
*/         

    

               
        if (pokemon.height > 7) {
       
           document.write("Name: " + pokemon.name + "<br>" + "height: " + pokemon.height + " feed" + "<-wow thats big!!!!, " + "<br>" + "type: " + pokemon.type + " " + "<br>"+ "<br>"); // let loop appear with if in site
          
          } 
       else {
           document.write("Name: " + pokemon.name + "<br>" + "height: " + pokemon.height + " feed" + "<br>" + "type: " + pokemon.type +  " "+ "<br>"+ "<br>");
          
       }
    });