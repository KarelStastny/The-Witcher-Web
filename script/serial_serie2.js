const serial = [{
    id: 1,
    name: "Zrnko pravdy",
    time: 63,
    description: "Geralt vyráží s Ciri na cestu, která ho dovede ke starému příteli. Jakmile u Soddenu ustane řinčení zbraní, začne Tissaia nelítostně pátrat po tom, co potřebuje vědět.",
    image: "../images/serial/2/1.jpg",
},{
    id: 2,
    name: "Kaer Morhen",
    time: 59,
    description: "Geralt míří domů v naději, že tam Ciri bude v bezpečí, ale hrozby číhají na každém rohu – i na Kaer Morhenu. Klíč k Yennefeřinu osvobození se možná ukrývá v jejích snech.",
    image: "../images/serial/2/2.jpg",
},{
    id: 3,
    name: "Ztráty",
    time: 60,
    description: "Ciri nemá pochopení pro Geraltovy způsoby a sama odvážně překonává náročné překážky. Kvůli intrikám a podezřením mezi členy Bratrstva se z Yennefer stává štvaná zvěř.",
    image: "../images/serial/2/3.jpg",
},{
    id: 4,
    name: "Tajné zprávy z Redanie",
    time: 56,
    description: "Na Kaer Morhen zavítá návštěvnice, která podá Ciri pomocnou ruku a pro Geralta má lákavou nabídku. Yennefer je v Redanii na útěku a hledá úkryt v podzemí.",
    image: "../images/serial/2/4.jpg",
},{
    id: 5,
    name: "Ukaž jim záda",
    time: 57,
    description: "K Ciriiným pronásledovatelům se přidá mocný mág a princezna se s Vesemirem domluví na tom, jak využít mimořádný objev. Geralt zkoumá záhadné monolity.",
    image: "../images/serial/2/5.jpg",
},{
    id: 6,
    name: "Milý příteli",
    time: 57,
    description: "Geralt jednu přítelkyni ztratí, jinou najde a taky pomůže Ciri zjistit víc o jejích schopnostech. Cahir nutí Fringillu, aby se soustředila na jejich hlavní cíl.",
    image: "../images/serial/2/6.jpg",
},{
    id: 7,
    name: "Voleth Meir",
    time: 55,
    description: "Geralt požádá o pomoc prostého barda a Yennefer pochopí, jak je Ciri jedinečná. V předvečer návštěvy císaře Emhyra v Cintře začíná atmosféra houstnout.",
    image: "../images/serial/2/7.jpg",
},{
    id: 8,
    name: "Rodina",
    time: 52,
    description: "Geralt bojuje s démonkou, která útočí na jeho nejbližší. Smyčka kolem Ciri se z vůle nejmocnějších z kontinentu pořádně utahuje.",
    image: "../images/serial/2/8.jpg",
},]


// Výpis do stránky
    for( let i of serial){
        console.log(i);

        let card = document.createElement("div")
            card.classList.add("card-serial")

        card.innerHTML = `
        <img src="${i.image}" alt="${i.name}">
        <div class="small-hedding">
            <h2>${i.id}. ${i.name}</h2>
            <span>${i.time} m</span>
        </div>
        <p>${i.description}</p>
        `

        console.log(card);

        document.querySelector(".serial-parts").appendChild(card)
    }

