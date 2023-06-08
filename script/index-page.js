// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// Po kliknutí na hamburger jse prohodí classy 
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})


// Scoll about game + studio
let linkGame = document.querySelector(".scroll_01")
let linkStudio = document.querySelector(".scroll_02")
let goalGame = document.querySelector(".goal_01").offsetTop
let goalStudio = document.querySelector(".goal_02").offsetTop


linkGame.addEventListener("click", () => {
    window.scrollTo({
        top: goalGame,
        behavior: "smooth"
    })
})

linkStudio.addEventListener("click", () => {
    window.scrollTo({
        top: goalStudio,
        behavior: "smooth"
    })
})
