let pokemonList = document.querySelector('ul'); 

fetch('https://pokeapi.co/api/v2/pokemon?limit=151') 
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        let pokemon = json.results;

        for (p of pokemon){  
            let listItem = document.createElement('li');
            listItem.innerHTML = '<p>' + p.name + '<p>';
            pokemonList.appendChild(listItem);
            
            let imgSrc = document.createElement('img');
            imgSrc.src = `https://img.pokemondb.net/artwork/large/${p.name}.jpg`;
            pokemonList.appendChild(imgSrc);
        }})
console.log(pokemonList);
