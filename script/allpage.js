
// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// Po kliknutí na hamburger jse prohodí classy 
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
