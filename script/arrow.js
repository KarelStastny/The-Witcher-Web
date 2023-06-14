// Sroll Arrow
const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", () => {
    // Od horní hranice 1000 přidat cassy
    if(window.scrollY > 500){
        toTop.classList.add("active")
        
    } else{
        toTop.classList.remove("active")
    }
})


// Progress bar

function updateProgressBar (){
    // Získání scrollTop a scrollHeight
    const {scrollTop, scrollHeight} = document.documentElement
  
    // Výpočet pro zisk v % aktuální výšky
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) *100}%`

    // aktualizace v CSS 
    document.querySelector("#progress-bar").style.width = scrollPercent
    
}

//Scroll Progress
document.addEventListener("scroll", updateProgressBar)
