const vybava = [{
    id: 1,
    name: "Addan Deith", 
    category: "swords",
    image:"../images/vybava/addan_deith.png"
},{
    id: 2,
    name: "Alder Folk", 
    category: "boots",
    image:"../images/vybava/Alder_Folk_boots.png"
},{
    id: 5,
    name: "Axemans Trousers", 
    category: "trousers",
    image:"../images/vybava/axemans_trousers.png"
},{
    id: 6,
    name: "Crossbow", 
    category: "crossbows",
    image:"../images/vybava/crossbow.png"
},{
    id: 7,
    name: "Adversary", 
    category: "swords",
    image:"../images/vybava/adversary.png"
},{
    id: 8,
    name: "Aerondlight", 
    category: "swords",
    image:"../images/vybava/aerondight.png"
},{
    id: 9,
    name: "Ami", 
    category: "swords",
    image:"../images/vybava/ami.png"
},{
    id: 10,
    name: "Anathema", 
    category: "swords",
    image:"../images/vybava/anathema.png"
},{
    id: 11,
    name: "Anferthe", 
    category: "swords",
    image:"../images/vybava/anferthe.png"
},{
    id: 12,
    name: "Angivare", 
    category: "swords",
    image:"../images/vybava/angivare.png"
},{
    id: 13,
    name: "Angrenian Cuirass", 
    category: "armors",
    image:"../images/vybava/Angrenian_cuirass.png"
},{
    id: 14,
    name: "Anth", 
    category: "swords",
    image:"../images/vybava/anth.png"
},{
    id: 15,
    name: "Arbitrator", 
    category: "swords",
    image:"../images/vybava/arbitrator.png"
},{
    id: 16,
    name: "Ard Skellige Aketon", 
    category: "armors",
    image:"../images/vybava/Ard_Skellige_aketon.png"
},{
    id: 17,
    name: "Ardaenye", 
    category: "swords",
    image:"../images/vybava/ardaenye.png"
},{
    id: 18,
    name: "Ashrune", 
    category: "swords",
    image:"../images/vybava/ashrune.png"
},{
    id: 19,
    name: "Assassins Gauntlets", 
    category: "gloves",
    image:"../images/vybava/assassin_gauntlets.png"
},{
    id: 20,
    name: "Assassins Trousers", 
    category: "trousers",
    image:"../images/vybava/assassins_trousers.png"
},{
    id: 21,
    name: "Assault Gauntlets", 
    category: "gloves",
    image:"../images/vybava/assault-gauntlets.png"
},{
    id: 22,
    name: "Axeman Boot", 
    category: "boots",
    image:"../images/vybava/axeman_boot.png"
},
]

// Výpis všech věcí z výbavy do stránky
for (let x of vybava){

    let card = document.createElement("div")
        // Přidány classy pro možnosti filtrování
        card.classList.add("card-vybava", x.category, "all", "hide-card-vybava" )

        card.innerHTML = `
        <a href="${x.image}" data-lightbox="mygallery" data-title="${x.name}"><img src="${x.image}" alt=""></a>
        <h3>${x.name}</h3>
        `

        // Výpis do stránky 
        document.querySelector(".list-vybavy").appendChild(card)
}


// Funkce pro filtrování 
const filter = (value) => {
    // označení všech buttons
    let buttons = document.querySelectorAll(".button-value")

    // Zjištění na jaké tlačítko je kliknuto kvůli vzhledu
        buttons.forEach( (oneButton) => {
        // Rozlišení na jaké tlačítko se klikno
            // Porovná Hodnotu poslanou do funkce z HTML s názevem button
            console.log(value.toLowerCase());
            console.log(oneButton.innerText.toLowerCase());

            if(value.toLowerCase() == oneButton.innerText.toLowerCase()){
                // Pokud se rovná přidána classa 
                oneButton.classList.add("activeBtn")
            }else{
                oneButton.classList.remove("activeBtn")
            }
        })


        // Filter jednotlivých karet
            // Nalezení všech karet
            let cards = document.querySelectorAll(".card-vybava")

            cards.forEach( (oneCard) => {
                // Zobrazení všech karet na Button All
                if(value == 'all'){
                    oneCard.classList.remove("hide-card-vybava")
                }


                // Zobrazení podle typu hodnoty
                // Pokud karta obsahuje hodnotu:
                if(oneCard.classList.contains(value)){
                    // Zruš skrytí
                    oneCard.classList.remove("hide-card-vybava")
                }else{
                    // Přidej skrytí
                    oneCard.classList.add("hide-card-vybava")
                }
                
            })
}


// Při otevření okna zobrazit všechnu výbavu
window.onload = () => {
    filter("all")
}
