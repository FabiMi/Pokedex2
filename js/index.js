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

    // calls the html class pokemon-List    
            let list = document.querySelector(".pokemon-List");

    // creates list-items inside the list
            let listItem = document.createElement("li");
            list.appendChild(listItem);

    // creates button inside the list-items
            let button = document.createElement("button");
            listItem.appendChild(button);
            button.innerText = pokemon.name;
       
      // tried to get the pictures       

      //     loadDetails(pokemon).then(function () {
       /*         let imgDiv = document.createElement('div');
                let pokeimg = document.createElement('img');
                pokeimg.src = pokemon.imageURL;
                pokeimg.classList.add('pokeimg');
        
                imgDiv.appendChild(pokeimg);
                button.appendChild(imgDiv);
          */
   //        changeScale();
           
            
    //add a click event witch runs the showdetails function
            
    button.addEventListener("click", function (event) {
            showDetails(pokemon);
            });

            };
    //log the pokemondetails when clicked
            function showDetails(item){
                pokemonRepository.loadDetails(item).then(function () {
                    console.log(item);
                })};
    
     //loads the pokemon from th Api      
                function loadList() {
                    return fetch(apiUrl).then(function (response) {
                    return response.json();
                    }).then(function (json) {
                      json.results.forEach(function (item) {
                        let pokemon = {
                          name: item.name,
                          detailsUrl: item.url,
                          
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
                          pokemon.imageUrl = details.sprites.front_default;
                          pokemon.height = details.height;
                          pokemon.types = details.types;
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
          showDetails: showDetails
        };
    })();

    pokemonRepository.loadList().then(function() {
        pokemonRepository.getAll().forEach(function (pokemon) {
        pokemonRepository.addListItem(pokemon);
       
        
        })


       
    });