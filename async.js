//variable store 
let p1_name = 'Ranjit';
let p2_name = "Someone";
let score1 = 0
let score2 =0 
const fight = document.getElementById('fight')
fight.addEventListener('click',async ()=>{
    initiate();
    setTimeout(()=>{
        let crd1 = document.getElementById("card1");
        let scr1 = crd1.querySelector("#experience").textContent;
        

        let crd2 = document.querySelector("#card2");
        let scr2 = crd2.querySelector("#experience").textContent;

        scr1 = Number(scr1)
        scr2 = Number(scr2)
        console.log(scr1,scr2);

        if (scr1 > scr2) {
            score1 = score1 + 1;
            document.querySelector("#p1_score").textContent = `Score: ${score1}`;
          } else if (scr1 < scr2) {
            score2 = score2 + 1;
            document.querySelector("#p2_score").textContent = `Score: ${score2}`;
          }


    },500)

    
   

    

})




async function initiate(){
    
    const poke1 = await getPokemon();
    let res = await fetch(poke1.url)
    let result = await res.json();
    console.log(result);
    displaPlayer1(result);

    const poke2 = await getPokemon();
    let res2 = await fetch(poke2.url);
    let result2 = await res2.json();
    displaPlayer2(result2)

}
function displaPlayer2(result){
    console.log(result);
    document.getElementById('p2_name').textContent = p2_name
    const card2 = document.querySelector('#card2')
     //image
     const img2 = document.createElement('img')
     img2.setAttribute('src',result.sprites.other.dream_world.front_default);
     card2.querySelector('#img').textContent = " "
     card2.querySelector('#img').append(img2) 
     //name
     card2.querySelector('#name').textContent = result.name

     //eperirnce
     card2.querySelector('#experience').textContent = result.base_experience
    
}
function displaPlayer1(result){
    document.querySelector('#card_header').querySelector('#p1_name').textContent = p1_name;
    const card1 = document.querySelector('#card1')
    //image
    const img1 = document.createElement('img')
    img1.setAttribute('src',result.sprites.other.dream_world.front_default);
    card1.querySelector('#img').textContent = " "
    card1.querySelector('#img').append(img1) 

    //name
    card1.querySelector('#name').textContent = result.name

    //eperirnce
    card1.querySelector('#experience').textContent = result.base_experience



}

async function getPokemon(){
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/")
    const data = await response.json();
    console.log(data);
    const results = data.results;
    console.log(results);
    let randomNum = Math.floor((Math.random()*20))
    console.log(randomNum);
   return results[randomNum]

}


// initiate();