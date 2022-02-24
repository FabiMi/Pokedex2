
// create IIFE repository  
  let pokemonRepository = (function() {
        
// Pokemonlist Array (source)

    let pokemonList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

//function get and add pokemon

    function add(pokemon) {
          pokemonList.push(pokemon);
    }
        
    function getAll() {
          return pokemonList;
    }


    function addListItem(pokemon){

    // calls the html class pokemon-list    
            let list = document.querySelector(".list-group");

    // creates list-items inside the list
            let listitem = document.createElement("li");
            listitem.classList.add("group-list-item");
            list.appendChild(listitem);

    // creates button inside the list-items using Bootstrap
            let button = document.createElement("button");
            button.classList.add("btn");
            button.classList.add("btn-primary");
            button.setAttribute('data-toggle', 'modal');
            button.setAttribute('data-target', '#pokeModal');
        
            listitem.appendChild(button);
            button.innerText = pokemon.name;
       
    //creates the image in the button
            loadDetails(pokemon).then(function(poke) {
                let imgDiv = document.createElement("div");
                let pokeimg = document.createElement("img");
                pokeimg.setAttribute("src", poke.imageUrl) // use this to set arc
                pokeimg.classList.add("pokeimg");
                imgDiv.classList.add("pokeDiv")
                imgDiv.appendChild(pokeimg);
                button.appendChild(imgDiv);
            })                  
    //add a click event witch runs the showdetails function    
                button.addEventListener("click", function () {
                          showDetails(pokemon);
                 });
             }
    //log the pokemondetails when clicked
                function showDetails(item){
                    pokemonRepository.loadDetails(item).then(function (pokemon) {
                        showModal(pokemon);
                })}


    //creates  the modal elements           
                function showModal(pokemon) {
                  // creates all the Pokemon ELements in the Modal
                      let titleElement = document.getElementById('modal-title');
                      titleElement.innerText = pokemon.name;
                      let modalbody = document.getElementById('modal-body');
                      modalbody.innerText = ""; 
                      let modalimg = document.createElement("img");
                      modalimg.classList.add("modalimg");
                      modalimg.setAttribute("src", pokemon.imageUrl); 

                      let pokestats = document.createElement("div");
                      pokestats.classList.add("pokestats");   
                      let poketype = document.createElement("p");
                      let pokeheight = document.createElement("p");
                      let pokeweight = document.createElement("p");
                      
                  //fills all the Pokemonelements with content
                      poketype.innerText = "type: " + pokemon.types ;
                      pokeheight.innerText = "height: " + pokemon.height + " feed";
                      pokeweight.innerText = "weight: " + pokemon.weight + " lbs";
            
                     
                  // modalbody.appendChild(closeButtonElement);      
                      modalbody.appendChild(modalimg);
                      modalbody.appendChild(pokestats);
                      pokestats.appendChild(poketype);
                      pokestats.appendChild(pokeheight);
                      pokestats.appendChild(pokeweight);
                     
                  // deletes the created contend in the modal
                    //  modalbody.dispose(modalimg);                    
                    }
                  

                  //loads the pokemon Attributes from the Api      
                      function loadList() {
                          return fetch(apiUrl).then(function (response) {
                          return response.json();
                          }).then(function (json) {
                            json.results.forEach(function (item) {
                              let pokemon = {
                                name: item.name,
                                detailsUrl: item.url,
                                height: item.height,
                                type: item.types,
                                weight: item.weight  
                              };
                                  add(pokemon);
                            });
                            }).catch(function (e) {
                                console.error(e);
                              }
                      )} 
                           


                      //loads the details of the clicked pokmeon
                        function loadDetails(pokemon) {
                            let url = pokemon.detailsUrl;
                            return fetch(url).then(function (response) {
                              return response.json();
                            }).then(function (details) {
                      // add the details 
                          pokemon.imageUrl = details.sprites.front_shiny;
                          pokemon.height = details.height;
                          pokemon.types = details.types.map((type) => type.type.name).join(', '),
                          pokemon.weight = details.weight
                            return pokemon
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
                                loadDetails: loadDetails,
                                showDetails: showDetails,
                                showModal: showModal
                              };
  })();

                                pokemonRepository.loadList().then(function() {
                                    pokemonRepository.getAll().forEach(function (pokemon) {
                                    pokemonRepository.addListItem(pokemon);                                                                  
                                    })   
                                });