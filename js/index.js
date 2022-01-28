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

    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/';



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
                loadDetails(pokemon).then(function () {
                    console.log(pokemon);
                })};
    
           
                function loadList() {
                    return fetch(apiUrl).then(function (response) {
                      return response.json();
                    }).then(function (json) {
                      json.results.forEach(function (item) {
                        let pokemon = {
                          name: item.name,
                          detailsUrl: item.url
                        };
                        add(pokemon);
                      });
                    }).catch(function (e) {
                      console.error(e);
                    })
                  }            


                  function loadDetails(item) {
                    let url = item.detailsUrl;
                    return fetch(url).then(function (response) {
                      return response.json();
                    }).then(function (details) {
                      // Now we add the details to the item
                      item.imageUrl = details.sprites.front_default;
                      item.height = details.height;
                      item.types = details.types;
                    }).catch(function (e) {
                      console.error(e);
                    });

                }
                


      
//expose functions to the "outside"        
        return {
          addListItem: addListItem,
          add: add,
          getAll: getAll,
          loadList: loadList,
          loadDetails: loadDetails
        };
    })();
             
    pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

    
        pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.loadList(pokemon);
        pokemonRepository.addListItem(pokemon);



       
    });