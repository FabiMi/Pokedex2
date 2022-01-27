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

        function getPokeName(pokemon) {
            return "Name: " + pokemon.name + "<br>";
        }

        function getPokeHeight(pokemon) {
            return "height: " + pokemon.height + " feed";
        }

        function getPokeType (pokemon) {
            return "type: " + pokemon.type + + " "+ "<br>"+ "<br>";
        }

        function getPokemon() {
            let pokeName = getPokeName(pokemon.name);
            let pokeHeight = getPokeHeight(pokemon.height);
            let pokeType = getPokeType(pokemon.type);
        
*/       

    

               
        if (pokemon.height > 7) {
       
           document.write("Name: " + pokemon.name + "<br>" + "height: " + pokemon.height + " feed" + "<-wow thats big!!!!, " + "<br>" + "type: " + pokemon.type + " " + "<br>"+ "<br>"); // let loop appear with if in site
          
          } 
       else {
           document.write("Name: " + pokemon.name + "<br>" + "height: " + pokemon.height + " feed" + "<br>" + "type: " + pokemon.type +  " "+ "<br>"+ "<br>");
          
       }
    });