let topArrow = document.querySelector(".topArrow")

console.log(topArrow);

window.addEventListener("scroll", () => {
    // Zjistí scroll na stránce
    let scroll = this.window.scrollY
    // Zjistí do jaké vzdálenosti je možno scrolovat
    let maxscroll = this.document.documentElement.scrollHeight - this.window.innerHeight

    console.log(scroll);
    console.log(maxscroll);

    // 10% dolu scrolem od maxima 
    if( Math.ceil(maxscroll * 0.1) <=  scroll){
        topArrow.style.dispaly = "block"
    } else{
        topArrow.style.dispaly = "block"
    }
    


})