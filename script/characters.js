const characters = [{
    id: 1,
    name: "Anna",
    image: "../images/character/anna.png"
},{
    id: 2,
    name: "Anna Henrietta",
    image: "../images/character/anna_henrietta.png"
},{
    id: 3,
    name: "Avallach",
    image: "../images/character/avallach.png"
},{
    id: 4,
    name: "Barnabas",
    image: "../images/character/barnabas.png"
},{
    id: 5,
    name: "Bart",
    image: "../images/character/bart.png"
},
]



// Filtrování všech Charakterů
const search = document.querySelector(".search-character")
const listCharacter = document.querySelector(".character-list")


// Vyhledávací políčko
search.addEventListener("input", (e) => {
    // Na text v políčku zavolána vyhledávací funkce
    charactersFilter(e.target.value)
})



// Pole pro všechny charaktery
let allCharacter = []



// Výpis všech dat
characters.map( (oneCharacter) =>{
    let card = document.createElement("div")


    


    // Vytvoření struktury
    card.innerHTML = `
    <div class="card">
    <img src="${oneCharacter.image}" alt="${oneCharacter.name}">
    <p>${oneCharacter.name}</p>
    </div>`
    console.log(oneCharacter);


    // Přidání do stránky a do nového pole
    listCharacter.appendChild(card)
    allCharacter.push(card)

   

})




// Filtrování pomocí přidání classy hide + CSS
charactersFilter = (inputText) => {
    allCharacter.forEach( (oneCharacter) => {
        if(oneCharacter.innerHTML.toLowerCase().includes(inputText.toLowerCase())){
            oneCharacter.classList.remove("hide")
        }else{
            oneCharacter.classList.add("hide")
        }
    })
}








