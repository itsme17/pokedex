
async function getPokemon(){
    try{
        let image = document.querySelector("img")
        let pokemonName = document.getElementById("name")
        let pokemonId = document.getElementById("pokemonId")
        var input = document.getElementById("searchInput").value;

        let api = await fetch("https://pokeapi.co/api/v2/pokemon/"+input);
        var data = await api.json();
        image.setAttribute("src",data.sprites.front_default)
        pokemonName.innerHTML = data.name
        pokemonId.innerHTML = data.id
    }
    catch (error){
        alert("invalid pokemon")
    }
    let move1 = document.getElementById("moveText1")
    let move2 = document.getElementById("moveText2")
    let move3 = document.getElementById("moveText3")
    let move4 = document.getElementById("moveText4")
    if(data.moves[0]){
        move1.innerHTML = data.moves[0].move.name
    }else{
        move1.innerHTML = ""
    }
    if(data.moves[1]){
        move2.innerHTML = data.moves[1].move.name
    }else{
        move2.innerHTML = ""
    }
    if(data.moves[2]){
        move3.innerHTML = data.moves[2].move.name
    }else{
        move3.innerHTML = ""
    }
    if(data.moves[3]){
        move4.innerHTML = data.moves[3].move.name
    }else{
        move4.innerHTML = ""
    }
await getEvolution()

}
async  function getEvolution(){
    var input = document.getElementById("searchInput").value;
    let evolutionTwo = document.getElementById("evolution2")
    let evolutionThree = document.getElementById("evolution3")
    let source = await fetch("https://pokeapi.co/api/v2/pokemon-species/"+input);
    var eData = await source.json();
    
    var ename = eData.evolves_from_species.name
    let api = await fetch("https://pokeapi.co/api/v2/pokemon/"+ename);
    var data = await api.json();
    evolutionTwo.setAttribute("src",data.sprites.front_default)


    let api2 = await fetch("https://pokeapi.co/api/v2/pokemon/"+input);
    var data2 = await api2.json();
    evolutionThree.setAttribute("src",data2.sprites.front_default)


}
async function getEvolutionImage(){

}
let button = document.getElementById('searchBtn');
button.addEventListener('click', getPokemon)

