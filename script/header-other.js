

let navigation = document.createElement("div")

  navigation.innerHTML = `
  <div class="nav-container">
  <nav class="navbar">

      <a href="../index.html" class="logo">The Witcher</a>


      <ul class="nav-menu">
          <li><a href="#">Gallery:</a>
          
              <!-- Rozbalovací menu -->
              <ul>
                  <li><a href="./wallpapers.html">Wallpapers</a></li>
                  <li><a href="./monster.html">Monstra</a></li>
                  <li><a href="./characters.html">Postavy</a></li>
                  <li><a href="./vybava.html">Výbava</a></li>
              </ul>

          </li>

          

          <li><a href="#">Hry:</a>
              <!-- Rozbalovací menu -->
              <ul>
                  <li><a href="./the_witcher_1.html">The Witcher 1</a></li>
                  <li><a href="./the_witcher_2.html">The Witcher 2</a></li>
                  <li><a href="./the_witcher_3.html">The Witcher 3</a></li>
              </ul>
          
          </li>



          <li><a href="#">Seriály:</a>
          
              <!-- Rozbalovací menu -->
              <ul>
                  <li><a href="./serie_01.html">1. série</a></li>
                  <li><a href="./serie_02.html">2. série</a></li>
                  <li><a href="./serie_03.html">3. série</a></li>
              </ul>
          </li>

          <li><a href="./books.html">Knihy</a></li>
          <li><a href="../index.html" class="scroll_01">O hře</a></li>
          <li><a href="../index.html" class="scroll_02">Studio</a></li>
      </ul>

      <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
      </div>
  </nav>
</div>
  
  `

document.querySelector(".header-others").appendChild(navigation)


// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

// Po kliknutí na hamburger jse prohodí classy 
hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})
