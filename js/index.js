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
            let list = document.querySelector(".pokemon-list");

    // creates list-items inside the list
            let listitem = document.createElement("li");
            list.appendChild(listitem);

    // creates button inside the list-items
            let button = document.createElement("button");
            listitem.appendChild(button);
            button.innerText = pokemon.name;
       

            loadDetails(pokemon).then(function(poke) {
                let imgDiv = document.createElement("div");
                let pokeimg = document.createElement("img");
                pokeimg.setAttribute("src", poke.imageUrl) // use this to set arc
              //  pokeimg.src = poke.imageUrl;
                pokeimg.classList.add("pokeimg");
                imgDiv.classList.add("pokeDiv")
                imgDiv.appendChild(pokeimg);
                button.appendChild(imgDiv);
            })
         
   //        changeScale();
           
            
    //add a click event witch runs the showdetails function
            
    button.addEventListener("click", function (event) {
            showDetails(pokemon);
            });

            };
    //log the pokemondetails when clicked
            function showDetails(item){
                pokemonRepository.loadDetails(item).then(function (pokemon) {
                    showModal(pokemon);
                })};

                
                function showModal(pokemon) {
                    
                    let modalcon = document.querySelector('#modalcon');
                    let modalContainer = document.createElement('div');  
                      modalContainer.classList.add('modal-container');                  
                      modalContainer.innerHTML = '';
                      

                      let modal = document.createElement('div');  
                      modal.classList.add('modal');
                  
                      let closeButtonElement = document.createElement('button');
                      closeButtonElement.classList.add('modal-close');
                      closeButtonElement.innerText = 'Close';
                      closeButtonElement.addEventListener('click', hideModal);
                  
                      let titleElement = document.createElement('h1');
                      titleElement.innerText = pokemon.name;
                  
                
                      let modalimg = document.createElement("img");
                      modalimg.setAttribute("src", pokemon.imageUrl);
                      modalimg.classList.add("modalimg");
                      let pokestats = document.createElement("div");
                      pokestats.classList.add("pokestats");   
                      let poketype = document.createElement("p");
                      let pokeheight = document.createElement("p");
                      let pokeweight = document.createElement("p");
                      poketype.innerText = "type: " + pokemon.types ;
                      pokeheight.innerText = "height: " + pokemon.height;
                      pokeweight.innerText = "weight: " + pokemon.weight ;
                      
                  
                      modal.appendChild(closeButtonElement);
                      modal.appendChild(titleElement);
                      modal.appendChild(modalimg);
                      modal.appendChild(pokestats);
                      pokestats.appendChild(poketype);
                      pokestats.appendChild(pokeheight);
                      pokestats.appendChild(pokeweight);
                      modalContainer.appendChild(modal);
                      modalcon.appendChild(modalContainer);


                  
                  
                      modalContainer.classList.add('is-visible');
                    
                    window.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                          hideModal();  
                        }
                      });
                      modalContainer.addEventListener('click', (e) => {
                        // Since this is also triggered when clicking INSIDE the modal
                        // We only want to close if the user clicks directly on the overlay
                        let target = e.target;
                        if (target === modalContainer) {
                          hideModal();
                        }
                      });

                    let dialogPromiseReject; // This can be set later, by showDialog
                  
                    function hideModal() {
                      let modalContainer = document.querySelector('.modal-container');
                      modalContainer.classList.remove('is-visible');
                      modalContainer.classList.remove('modal-container');
                  
                      if (dialogPromiseReject) {
                        dialogPromiseReject();
                        dialogPromiseReject = null;
                      }
                     
                      window.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                          hideModal();  
                        }

                        
                      });
                      modalContainer.addEventListener('click', (e) => {
                        // Since this is also triggered when clicking INSIDE the modal
                        // We only want to close if the user clicks directly on the overlay
                        let target = e.target;
                        if (target === modalContainer) {
                          hideModal();
                        }
                      });

                    
                    
                    
                    }
                  
                }
            
                  
                  
                

                
    
     //loads the pokemon from th Api      
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
                    })}
                           


//loads the details of the clicked pokmeon
                    function loadDetails(pokemon) {
                        let url = pokemon.detailsUrl;
                        return fetch(url).then(function (response) {
                          return response.json();
                        }).then(function (details) {
// add the details 
                          pokemon.imageUrl = details.sprites.front_shiny;
                          pokemon.height = details.height;
                          pokemon.types = details.types;
                          pokemon.weight = details.weight
                            return pokemon
    
                        }).catch(function (e) {
                          console.error(e);
                        });
                      
                    }

                
/*
                    function changeScale () {

                       
                     

                        if (loadDetails.height < 5) {

                            addListItem.button.innerHTML = '<button id="small"></button>';
                        }
                            else {

                            addListItem.button.innerHTML = '<button id="normal"></button>';

                    }}
*/

      
//expose functions to the "outside"        
        return {
 //         changeScale: changeScale,  
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