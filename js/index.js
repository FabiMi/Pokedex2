// create IIFE repository  
  let pokemonRepository = (function() {
        
// Pokemonlist Array (source)

        let pokemonList = [{
        name:  "Bulbasaur",
        height: 7,
        type: ["grass, poison"],
    },
    {
        name:  "Chamander",
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

       


        function addListItem(pokemon){

    // calls the html class pokemon-List    
            let list = document.querySelector(".pokemon-List");

    // creates list-items inside the list
            let listItem = document.createElement("li");
            list.appendChild(listItem);

    // creates button inside the list-items
            let button = document.createElement("button");
            listItem.appendChild(button);
            button.innerText = pokemon.name;

    //add a click event wish runs the showdetails function
            button.addEventListener("click", function (pokemon) {
            showDetails(pokemon);
            });

            };
    //log the pokemondetails 
            function showDetails(pokemon){
                console.log(getAll(pokemon));
    
                };
    
           



      
//expose functions to the "outside"        
        return {
          addListItem: addListItem,
          add: add,
          getAll: getAll
        };
    })();
             
    pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

    
        pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);


       
    });