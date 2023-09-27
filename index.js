console.log('hellp');

const fight  = document.getElementById('fight')
// console.log(fight);
fight.addEventListener('click',()=>{
    getPokemon();
})

function getPokemon(){
    const req = fetch(`https://pokeapi.co/api/v2/pokemon/`)
    
   req.then((response)=>{console.log(response);
   
            return response.json()})
            .then((pokemon)=>{
                console.log(pokemon.results);
                displayPlayer1(pokemon.results)
                // fetch(pokemon.results[2].url)
                // .then((response)=>{return response.json()})
                // .then((singlepoke)=>{console.log(singlepoke);
                //                      console.log(singlepoke.abilities[1].ability.name);
                
                
                
                
                })
                console.log();

            // })
}
function displayPlayer1(results){
    const topHeader = document.getElementById('card_header')
   
    const player1 = document.getElementById('p1_name')
    // let score1 = topHeader.getElementById('p1_score')


    
   
    
    player1.textContent ='hello';
    console.log(results);
    let randomNum = Math.floor(((Math.random()*20)))
    console.log(results[randomNum].name);

}