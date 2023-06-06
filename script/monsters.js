const monsters = [{
    id: 1,
    name: "Alghoul",
    image: "../images/monsters/alghoul.png",
},{
    id: 2,
    name: "Arachas",
    image: "../images/monsters/arachas.png",
},{
    id: 3,
    name: "Armor Edarachas",
    image: "../images/monsters/armoredarachas.png",
},{
    id: 4,
    name: "Bear",
    image: "../images/monsters/bear.png",
},{
    id: 5,
    name: "Berserker",
    image: "../images/monsters/berserker.png",
},{
    id: 6,
    name: "Potracenka",
    image: "../images/monsters/botchling.png",
},{
    id: 7,
    name: "Bruxa",
    image: "../images/monsters/bruxa.png",
},{
    id: 8,
    name: "Caretaker",
    image: "../images/monsters/caretaker.png",
},{
    id: 9,
    name: "Cloud Giant",
    image: "../images/monsters/cloud_giant.png",
},{
    id: 10,
    name: "Crones",
    image: "../images/monsters/crones.png",
},{
    id: 11,
    name: "Cyclops",
    image: "../images/monsters/cyclops.png",
},{
    id: 12,
    name: "Dagonet",
    image: "../images/monsters/dagonet.png",
},{
    id: 13,
    name: "Dettlaff",
    image: "../images/monsters/dettlaff_vampire.png",
},{
    id: 14,
    name: "Devil by The Well",
    image: "../images/monsters/devilbythewell.png",
},{
    id: 15,
    name: "Drowner",
    image: "../images/monsters/drowner.png",
},
]

// Vypsání možností vyhledávání co je vůbec v poli
const optionsSearch = document.querySelector(".optionsSearch")
    monsters.map( (options) =>{
        let oneOptions = document.createElement("span")
        oneOptions.innerHTML = ` ${options.name},  `

        optionsSearch.appendChild(oneOptions)
    })


// Zachytnutí políčka
const input = document.querySelector(".monsterInput")
    input.addEventListener( "input", (e) => {
        inputValue.text = e.target.value

        // Zavolána funkce která porovnává monstra a hledaným textem
        renderMonster(monsters, inputValue)
    })

// Uložení hledaného textu do proměné aby se mohlo poslat do funkce
let inputValue = {
    text: ""
}

// Funkce pro výpis a Filter
const renderMonster = (ourMonsters, searchingText) => {


    // Filter na naše pole
    let array = ourMonsters.filter((oneMonster) => {
        return oneMonster.name.toLowerCase().includes(searchingText.text.toLowerCase())
    })

    // Do Array se uloží pouze výsledky které odpovídají zadání
    // console.log(array);

    // Promazání pole výsledků 
    // document.querySelector(".allmonster").innerHTML = ""

    // Výpis
    array.map( (oneMonster) => {
        let card = document.createElement("div")

        card.innerHTML = `
        <div class="card-monster">
        <h3>${oneMonster.name}</h3>
        <a href="${oneMonster.image}" data-lightbox="mygallery" data-title="${oneMonster.name}"><img src="${oneMonster.image}" alt="${oneMonster.name}"></a>
        </div>
        `
        document.querySelector(".allmonster").appendChild(card)
    })
}





