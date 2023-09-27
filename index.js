console.log('hellp');

const fight  = document.getElementById('fight')


let score1 =0
let score2 =0


var randomNum1;

function getPokemon(){
    const req = fetch(`https://pokeapi.co/api/v2/pokemon/`)
    
   req.then((response)=>{console.log(response);
   
            return response.json()})
            .then((pokemon)=>{
                console.log(pokemon.results);
                randomNum1 = Math.floor(((Math.random()*20)))
                console.log("random1",randomNum1);

                displayPlayer1(pokemon.results[randomNum1])
                return fetch(`https://pokeapi.co/api/v2/pokemon/`)
                
                // fetch(pokemon.results[2].url)
                // .then((response)=>{return response.json()})
                // .then((singlepoke)=>{console.log(singlepoke);
                //                      console.log(singlepoke.abilities[1].ability.name);
                
                }).then((response)=>{
                    return response.json();


                }).then((poke)=>{
                    console.log(poke.results);
                let randomNum2 = Math.floor(((Math.random()*20)))
                console.log("random2",randomNum2);
                console.log("random1",randomNum1);


                if(randomNum1 === randomNum2 && randomNum2!==19){

                    displayPlayer2(poke.results[randomNum2+1])
                    

                }
                else{
                    displayPlayer2(poke.results[randomNum2])

                }

                
                    


                })
                

            // })
}
function displayPlayer1(result){
    const card1 = document.querySelector('#card1');
    card1.querySelector('#name').textContent = result.name;

    fetch(result.url).then((response)=>{
        return response.json();

    }).then((urlData)=>{
        console.log(urlData)
        let abilities = urlData.abilities
        console.log(abilities);
        const img1 = document.createElement('img')
        console.log(urlData.sprites.other.dream_world.front_default);
        // let imgSrc = urlData.
        img1.setAttribute('src',urlData.sprites.other.dream_world.front_default)
        img1.style.width = '250px'
        img1.style.height = '250px'
        card1.querySelector('#img').innerHTML=''
        card1.querySelector('#img').append(img1)
        
        card1.querySelector('#experience').textContent = urlData.base_experience

        const abilis = card1.querySelector('#abilities')
        abilis.innerHTML = '';
        for(let i of abilities){
            const li  = document.createElement('li')
            li.textContent=''
            li.textContent = i.ability.name
            abilis.append(li)
        }
    
    })
        
    console.log(result.name);

    const name =  document.getElementById('name')
    const score = document.getElementById('p1_score')
    
   
}

function displayPlayer2(result){
    // const topHeader = document.getElementById('card_header')
    const card2 = document.querySelector('#card2');
    card2.querySelector('#name').textContent = result.name;

    fetch(result.url).then((response)=>{
        return response.json();

    }).then((urlData)=>{
        console.log(urlData)
        let abilities = urlData.abilities
        console.log(abilities);
        const img1 = document.createElement('img')
        console.log(urlData.sprites.other.dream_world.front_default);
        // let imgSrc = urlData.
        img1.setAttribute('src',urlData.sprites.other.dream_world.front_default)
        img1.style.width = '250px'
        img1.style.height = '250px'
        card2.querySelector('#img').innerHTML=''
        card2.querySelector('#img').append(img1)
        
        card2.querySelector('#experience').textContent = urlData.base_experience

        const abilis = card2.querySelector('#abilities')
        abilis.innerHTML = '';
        
        for(let i of abilities){
            const li  = document.createElement('li')
            // li.textContent=''
            li.textContent = i.ability.name
            // abilis.append('')
            abilis.append(li)

        }
    
    })
        
    console.log(result.name);

    const name =  document.getElementById('name')
    const score = document.getElementById('p1_score')
    
    
   
}

const player1 = document.getElementById('p1_name')
player1.textContent = "Player-1"

const player2 = document.getElementById('p2_name')
player2.textContent = "Player-2"


fight.addEventListener('click',()=>{
    getPokemon();
    const cr1 = document.getElementById('card1')
    const cr2 = document.getElementById('card2')

    setTimeout(()=>{
        let exp1 = cr1.querySelector('#experience').textContent
        console.log(typeof exp1);
        exp1 = Number(exp1)
        console.log(typeof exp1);
        let  exp2 = cr2.querySelector('#experience').textContent
        exp2 = Number(exp2)
        console.log(exp2);
        if(exp1 > exp2){
            score1+=1;
            document.getElementById('p1_score').textContent = `Score : ${score1}`
        }else if(exp1 < exp2){
            score2+=1;
            document.getElementById('p2_score').textContent = `Score : ${score2}`

        }

    },1000)
   
    // console.log(card1);

})