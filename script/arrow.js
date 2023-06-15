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



