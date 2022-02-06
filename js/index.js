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

    //creates  the modal elements           
                function showModal(pokemon) {
                    
                    let modalcon = document.querySelector('#modalcon');
                    let modalContainer = document.createElement('div');  
                    let profoak = document.createElement('img');
                    profoak.classList.add("profoak");
                    profoak.setAttribute("src", "../img/Daco_4578050.png"); 

                      modalContainer.classList.add('modal-container');                  
                      modalContainer.innerHTML = '';
                      

                      let modal = document.createElement('div');  
                      modal.classList.add('modal');
                  
                      let closeButtonElement = document.createElement('button');
                      closeButtonElement.classList.add('modal-close');
                      closeButtonElement.innerText = 'Close';
                      closeButtonElement.addEventListener('click', hideModal);
                  


                      // creates all the Pokemon ELements in the Modal
                      let titleElement = document.createElement('h1');
                      titleElement.innerText = pokemon.name;
                      let modalimg = document.createElement("img");
                      modalimg.classList.add("modalimg");
                      let pokestats = document.createElement("div");
                      pokestats.classList.add("pokestats");   
                      let poketype = document.createElement("p");
                      let pokeheight = document.createElement("p");
                      let pokeweight = document.createElement("p");
                      
                    //fills all the Pokemonelements with content
                      modalimg.setAttribute("src", pokemon.imageUrl);  
                      poketype.innerText = "type: " + pokemon.types ;
                      pokeheight.innerText = "height: " + pokemon.height + " feed";
                      pokeweight.innerText = "weight: " + pokemon.weight + " lbs";
                      
                  //let all the Elements of the Modal append
                      modalContainer.appendChild(profoak);  
                      modal.appendChild(closeButtonElement);
                      modal.appendChild(titleElement);
                      modal.appendChild(modalimg);
                      modal.appendChild(pokestats);
                      pokestats.appendChild(poketype);
                      pokestats.appendChild(pokeheight);
                      pokestats.appendChild(pokeweight);
                      
                      
                    //let the modal elemenst append

                      modalContainer.appendChild(modal);
                      modalcon.appendChild(modalContainer);                      
                      modalContainer.classList.add('is-visible');


                      function colorchange(pokemon) {
                        if (showModal.innerHTML.contains("FIRE")) {
                            modal.classList.add('red')        
                        }





                    }
                    
                    window.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                          hideModal();  
                        }
                      });
                      modalContainer.addEventListener('click', (e) => {
                       
                        let target = e.target;
                        if (target === modalContainer) {
                          hideModal();
                        }
                      });

                   
                    //hides the modal 
                    function hideModal() {
                      let modalContainer = document.querySelector('.modal-container');
                     // modalContainer.classList.remove('is-visible');
                      //modalContainer.classList.remove('modal-container');
                     // profoak.classList.add("hide");
                      
                      modalContainer.parentNode.removeChild(modalContainer);
                  
                 
                     //hide the modal when clicked the escape button
                      window.addEventListener('keydown', (e) => {
                        if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
                          hideModal();  
                        }

                     //hide the modal when clicked outside of the modal   
                      });
                      modalContainer.addEventListener('click', (e) => {
                        let target = e.target;
                        if (target === modalContainer) {
                          hideModal();
                        }
                      });

                    
                    
                    
                    }
                  
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
                          pokemon.types = details.types.map((type) => type.type.name).join(', '),
                          pokemon.weight = details.weight
                            return pokemon
    
                        }).catch(function (e) {
                          console.error(e);
                        });
                      
                    }


      
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