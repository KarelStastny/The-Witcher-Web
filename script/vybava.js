const vybava = [{
    id: 1,
    name: "Addan Deith", 
    category: "sword",
    image:"../images/vybava/addan_deith.png"
},{
    id: 2,
    name: "Alder Folk", 
    category: "boots",
    image:"../images/vybava/Alder_Folk_boots.png"
},{
    id: 3,
    name: "Angrenian", 
    category: "armor",
    image:"../images/vybava/Angrenian_cuirass.png"
},{
    id: 4,
    name: "Asassins Gauntents", 
    category: "gloves",
    image:"../images/vybava/assassin_gauntlets.png"
},{
    id: 5,
    name: "Axemans Trousers", 
    category: "trousers",
    image:"../images/vybava/axemans_trousers.png"
},{
    id: 6,
    name: "Crossbow", 
    category: "crossbow",
    image:"../images/vybava/crossbow.png"
},
]


for (let x of vybava){
    // console.log(x);
    // Vytvoří div a přidá do něj clássy pro filtrování
    let card = document.createElement("div")
        card.classList.add("card", x.category, "hide")
      

    // Container na obrázek + classa
    let imageCont = document.createElement("div")
        imageCont.classList.add("image-container")
        
    // Vytvoří obrázek, do SRC vloží cestu k obrázku, přidá do containeru a do card
    let image = document.createElement("img")
        image.setAttribute("src", x.image)
        imageCont.appendChild(image)
        card.appendChild(imageCont)

    //Vytvoří název výbavy + classa + natažení dat + přidání do containeru
    let name = document.createElement("h3")    
        name.classList.add("nameVybava")
        name.innerText = x.name
        card.appendChild(name)
    
    // Výpis do stránky 
    document.querySelector(".list-vybavy").appendChild(card)
    
}