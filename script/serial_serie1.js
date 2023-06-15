const serial = [{
    id: 1,
    name: "Začátek konce",
    time: 61,
    description: "Ve městě Blaviken přivítají Geralta nepřátelští obyvatelé a mazaný mág. Království Nilfgaard se rozhodne dobýt Cintru a Ciri vidí, jak se její svět začíná hroutit.",
    image: "../images/serial/1/1.jpg",
},{
    id: 2,
    name: "Čtyři marky",
    time: 61,
    description: "Šikanovaná a odstrkovaná Yennefer náhodou objeví způsob, jak utéct. Geraltovo pátrání po takzvaném ďáblovi skončí pořádným malérem. Ciri najde bezpečí mezi svými.",
    image: "../images/serial/1/2.jpg",
},{
    id: 3,
    name: "Zrádce měsíc",
    time: 67,
    description: "Geralt převezme po jiném zaklínači rozdělanou práci v království, které terorizuje divoká příšera. Yennefer si zajistí magickou novou budoucnost, ale za brutální cenu.",
    image: "../images/serial/1/3.jpg",
},{
    id: 4,
    name: "O hostinách, parchantech a pohřbech",
    time: 63,
    description: "Geralt neochotně doprovází Marigolda na královský ples. Ciri vejde do začarovaného lesa. Yennefer se pokusí ochránit svoje svěřence.",
    image: "../images/serial/1/4.jpg",
},{
    id: 5,
    name: "Touhy v láhvi",
    time: 60,
    description: "Yennefer nedbá na varování a snaží se najít lék, který by jí vrátil, o co přišla. Geralt nechtěně vystaví Marigolda nebezpečí. Pátrání po Ciri nabírá obrátky.",
    image: "../images/serial/1/5.jpg",
},{
    id: 6,
    name: "Vzácný druh",
    time: 60,
    description: "Tajemný muž se pokusí zlákat Geralta k lovu na běsnícího draka a tahle mise přiláká pozornost jedné známé tváře. Ciri má pochybnosti o tom, komu může důvěřovat.",
    image: "../images/serial/1/6.jpg",
},{
    id: 7,
    name: "Před pádem",
    time: 48,
    description: "Svět ohrožuje vzrůstající moc království Nilfgaard. Yennefer se vrátí ke starému způsobu života a Geralt přehodnotí svůj závazek vůči zákonu překvapení.",
    image: "../images/serial/1/7.jpg",
},{
    id: 8,
    name: "Něco více",
    time: 60,
    description: "Geralta skolí děsivá smečka nepřátel. Yennefer se společně se svými mágy připravuje na obranu. Neznámá laskavá žena se ujme otřesené Ciri.",
    image: "../images/serial/1/8.jpg",
},]


// Výpis do stránky
    for( let i of serial){
        // console.log(i);

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

        // console.log(card);

        document.querySelector(".serial-parts").appendChild(card)
    }

