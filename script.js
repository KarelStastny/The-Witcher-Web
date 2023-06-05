
// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// Po kliknutí na hamburger jse prohodí classy 
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})





// Auto Write text heding
let hedding = document.querySelector(".heddingText")
let hedding2 = document.querySelector(".heddingText2")
let text = "The Witcher "
let text2 = "Fan club for Life"
let idFirstLetter = 1
let speed = 500 / 8


printText = () => {
    // Rozdělím text na písmena
    hedding.textContent = text.slice(0, idFirstLetter)
    hedding2.textContent = text2.slice(0, idFirstLetter)
    
    // přidá navíším letter o 1 aby se vzalo další písmeno
    idFirstLetter = idFirstLetter + 1

    // spoustí funci se spožděním
    setTimeout(printText, speed)
}

printText()
