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
    document.querySelector(".allmonster").innerHTML = ""

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





