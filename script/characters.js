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
},{
    id: 6,
    name: "Bedlam",
    image: "../images/character/bedlam.png"
},{
    id: 7,
    name: "Birna",
    image: "../images/character/birna.png"
},{
    id: 8,
    name: "Bloody Baron",
    image: "../images/character/bloody_baron.png"
},{
    id: 9,
    name: "Blue boy Lugos",
    image: "../images/character/blueboylugos.png"
},{
    id: 10,
    name: "Brewess",
    image: "../images/character/brewess.png"
},{
    id: 11,
    name: "Caranthir",
    image: "../images/character/caranthir.png"
},{
    id: 12,
    name: "Cerys",
    image: "../images/character/cerys.png"
},{
    id: 13,
    name: "Ciri",
    image: "../images/character/ciri.png"
},{
    id: 14,
    name: "Cranch",
    image: "../images/character/crach.png"
},{
    id: 15,
    name: "Dandelion",
    image: "../images/character/Dandelion.png"
},{
    id: 16,
    name: "Dijkstra",
    image: "../images/character/dijkstra.png"
},{
    id: 17,
    name: "Donar",
    image: "../images/character/donar.png"
},{
    id: 18,
    name: "Dudu",
    image: "../images/character/dudu.png"
},{
    id: 19,
    name: "Elihal",
    image: "../images/character/elihal.png"
},{
    id: 20,
    name: "Emhyr var Emreis",
    image: "../images/character/Emhyr_var_Emreis.png"
},{
    id: 21,
    name: "Eredin",
    image: "../images/character/eredin.png"
},{
    id: 22,
    name: "Eskel",
    image: "../images/character/eskel.png"
},{
    id: 23,
    name: "Ewald",
    image: "../images/character/Ewald.png"
},{
    id: 24,
    name: "Fringilla",
    image: "../images/character/fringilla.png"
},{
    id: 25,
    name: "Geralt of Rivia",
    image: "../images/character/Geralt_of_Rivia.png"
},{
    id: 26,
    name: "Hjalmar",
    image: "../images/character/hjalmar.png"
},{
    id: 27,
    name: "Jonny Godling",
    image: "../images/character/jonny_godling.png"
},{
    id: 28,
    name: "Keira",
    image: "../images/character/keira.png"
},{
    id: 29,
    name: "King Bran",
    image: "../images/character/kingbran.png"
},{
    id: 30,
    name: "Lambert",
    image: "../images/character/lambert.png"
},{
    id: 31,
    name: "Letho",
    image: "../images/character/letho.png"
},{
    id: 32,
    name: "Margarita",
    image: "../images/character/margarita.png"
},{
    id: 33,
    name: "Mirrorman",
    image: "../images/character/mirrorman.png"
},{
    id: 34,
    name: "Morvran Voorhis",
    image: "../images/character/morvran_voorhis.png"
},{
    id: 35,
    name: "Mousesack",
    image: "../images/character/mousesack.png"
},{
    id: 36,
    name: "Pellar",
    image: "../images/character/pellar.png"
},{
    id: 37,
    name: "Philippa",
    image: "../images/character/philippa.png"
},{
    id: 38,
    name: "Priscilla",
    image: "../images/character/priscilla.png"
},{
    id: 39,
    name: "Radovid",
    image: "../images/character/radovid.png"
},{
    id: 40,
    name: "Roach",
    image: "../images/character/roach.png"
},{
    id: 41,
    name: "Roche",
    image: "../images/character/roche.png"
},{
    id: 42,
    name: "Triss",
    image: "../images/character/Triss.png"
},{
    id: 43,
    name: "Uma",
    image: "../images/character/uma.png"
},{
    id: 44,
    name: "Vesemir",
    image: "../images/character/vesemir.png"
},{
    id: 45,
    name: "Vivaldi",
    image: "../images/character/vivaldi.png"
},{
    id: 46,
    name: "Weavess",
    image: "../images/character/weavess.png"
},{
    id: 47,
    name: "Whispess",
    image: "../images/character/whispess.png"
},{
    id: 48,
    name: "Whoresonjr",
    image: "../images/character/whoresonjr.png"
},{
    id: 49,
    name: "Yennefer of Vengeberg",
    image: "../images/character/Yennefer_of_Vengerberg.png"
},{
    id: 50,
    name: "Zoltan",
    image: "../images/character/zoltan.png"
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
    <div class="card-character">
    <img src="${oneCharacter.image}" alt="${oneCharacter.name}">
    <p>${oneCharacter.name}</p>
    </div>`
    // console.log(oneCharacter);

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

